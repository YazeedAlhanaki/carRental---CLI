import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function updateCar() {
	const { data: cars } = await axios.get(baseUrl + '/cars');
	const formattedCars = cars.map((c: any) => ({ carName: c.carName, carBrand: c.carBrand, model: c.model }));
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
	]);

	await axios.patch(baseUrl + `/cars/${car.car_id}`, newCar);

	console.log(`Car for ${car.carName}, has been updated ✅`);
}
