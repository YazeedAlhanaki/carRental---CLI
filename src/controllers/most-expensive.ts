import axios from 'axios';
import { baseUrl, globalData } from '..';

export async function getMostExpensive() {
	const { data: cheapest } = await axios.get(baseUrl + '/most-expensive-available-car');
	const formattedCars ={ carName: cheapest.carName, carBrand: cheapest.carBrand, model: cheapest.model , price: cheapest.price } 
	console.table(formattedCars);
}
