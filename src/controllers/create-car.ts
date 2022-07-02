import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl, token } from '..';

export async function createCar() {
	const carData = await prompt([
		{
			type: 'input',
			name: 'carName',
			message: 'Enter car name 🔤 ',
		},
		{
			type: 'input',
			name: 'carBrand',
			message: 'Enter car brand ',
		},
		{
			type: 'input',
			name: 'color',
			message: 'Enter car color ',
		},
		{
			type: 'input',
			name: 'capacity',
			message: 'Enter capacity of the car ',
		},
		{
			type: 'input',
			name: 'model',
			message: 'Enter model of the car ',
		}
	]);

	await axios.post(
		baseUrl + '/cars',
		{
			
			...carData,
		},
		{
			headers: {
				authorization: 'Bearer ' + token,
			},
		}
	);

	console.log(`car for ${carData}, has been added ✅`);
}
