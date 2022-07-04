import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

export async function deleteCar() {
	try {
		const { data: cars } = await axios.get(baseUrl + '/cars' , {
			headers: {
				Authorization: 'Bearer ' + globalData.token,
			}
		})
	const formattedCars = cars.map((c: any) => ({ carName: c.carName, carBrand: c.carBrand , model: c.model }));
	console.table(formattedCars);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val:string) => val,
	});
	const car = cars[index];
	console.log(car.car_id)
	await axios.delete(baseUrl + `/cars/${car.car_id}`, {
		headers: {
			Authorization: 'Bearer ' + globalData.token,
		},
	});
	console.log(`car fot ${car.carName} has been deleted ✅`);
} catch (err: any) {
	console.log(err?.response?.data);
}
}
