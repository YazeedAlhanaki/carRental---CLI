import axios from 'axios';
import { baseUrl } from '..';

export async function getCars() {
	const { data: cars } = await axios.get(baseUrl + '/cars');
	const formattedCars = cars.map((c: any) => ({ carName: c.carName, carBrand: c.carBrand, model: c.model }));
	console.table(formattedCars);
}
