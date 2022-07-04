import axios from 'axios';
import { baseUrl, globalData } from '..';

export async function getCustomers() {
	try {
		const { data: customers } = await axios.get(baseUrl + '/customer',{
			headers: {
				Authorization: 'Bearer ' + globalData.token,
			}
		});
	const formattedCustomers = customers.map((c: any) => ({ customer_name: c.customer_name, customer_age: c.customer_age , customer_contact: c.customer_contact }));
	console.table(formattedCustomers);
} catch (err: any) {
	console.log(err?.response?.data);
}
}