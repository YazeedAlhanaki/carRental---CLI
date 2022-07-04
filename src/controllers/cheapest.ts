import axios from 'axios';
import { baseUrl, globalData } from '..';

export async function getChaeapest() {
	const { data: cheapest } = await axios.get(baseUrl + '/cheapest-available-car');
	const formattedCars ={ carName: cheapest.carName, carBrand: cheapest.carBrand, model: cheapest.model , price: cheapest.price } 
	console.table(formattedCars);
}
