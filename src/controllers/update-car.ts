import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

export async function updateCar() {
	try {
		const { data: cars } = await axios.get(baseUrl + '/cars' , { 
		headers: {
			Authorization: 'Bearer ' + globalData.token,
		},

	})
	const formattedCars = cars.map((c: any) => ({ carName: c.carName, carBrand: c.carBrand, model: c.model, is_booked: c.is_booked , price: c.price }));
	console.table(formattedCars);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🗂',
		filter: (val) => +val,
	});
	const car = cars[index];

	const newCar = await prompt([
		{
			type: 'input',
			name: 'carName',
			message: `Enter new name or press enter to keep it as (${car.carName})`,
			filter: (val) => {
				if (val.trim() === '') return car.carName;
				return val;
				
			},
		},
		{
			type: 'input',
			name: 'model',
			message: `Enter new model or press enter to keep it as (${car.model})`,
			filter: (val) => {
				if (val.trim() === '') return car.model;
				return val;
			},
		},
		{
			type: 'input',
			name: 'price',
			message: `Enter new price or press enter to keep it as (${car.price})`,
			filter: (val) => {
				if (val.trim() === '') return car.price;
				return val;
			},
		},
		{
			type: 'input',
			name: 'is_booked',
			message: `Enter new availability or press enter to keep it as (${car.is_booked})`,
			filter: (val) => {
				if (val.trim() === '') return car.is_booked;
				return val;
			},
		},
	]);

	await axios.patch(baseUrl + `/cars/${car.car_id}`, newCar , {
		headers: {
			Authorization: 'Bearer ' + globalData.token,
		},
	});

	console.log(`Car for ${car.carName}, has been updated ✅`);
} catch (err: any) {
	console.log(err?.response?.data);
}
}
