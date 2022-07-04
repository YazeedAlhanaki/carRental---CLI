import axios from 'axios';
import { baseUrl, globalData } from '..';

export async function getCars() {
	try {
		const { data: cars } = await axios.get(baseUrl + '/cars', {
			headers: {
				Authorization: 'Bearer ' + globalData.token,
			},
		});
	const formattedCars = cars.map((c: any) => ({ carName: c.carName, carBrand: c.carBrand, model: c.model, is_booked: c.is_booked, price: c.price }));
	console.table(formattedCars);
}catch (err: any) {
	console.log(err?.response?.data);
}}

