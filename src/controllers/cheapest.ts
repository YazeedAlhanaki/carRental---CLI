import axios from 'axios';
import { baseUrl } from '..';

export async function getChaeapest() {
	const { data: cheapest } = await axios.get(baseUrl + '/cheapest-available-car');
	const formattedCars = cheapest.map((c: any) => ({ carName: c.carName, carBrand: c.carBrand, model: c.model , price: c.ptice }));
	console.table(formattedCars);
}
