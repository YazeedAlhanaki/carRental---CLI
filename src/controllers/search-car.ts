import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function searchCar() {
	const {text} = await prompt([
		{
			type: 'input',
			name: 'text',
			message: 'Enter name to search 🔤 ',
		},
	]);

	const { data: cars } = await axios.get(baseUrl + '/cars', {
		params: {text},
	});
	const formattedCars = cars.map((c: any) => ({ carName: c.carName }));
	console.table(formattedCars);
}
