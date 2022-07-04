import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

export async function searchCar() {
	const {text} = await prompt([
		{
			type: 'input',
			name: 'text',
			message: 'Enter name to search 🔤 ',
		},
	]);
try { 
	const { data: cars } = await axios.get(baseUrl + '/cars', {
		params: {text},
		headers: {
			Authorization: 'Bearer ' + globalData.token,
		},
});

	
	const formattedCars = cars.map((c: any) => ({ carName: c.carName }));
	console.table(formattedCars);
} catch (err: any) {
	console.log(err?.response?.data);
}
}
