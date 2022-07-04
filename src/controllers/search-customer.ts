import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

export async function searchCustomer() {
	const {text} = await prompt([
		{
			type: 'input',
			name: 'text',
			message: 'Enter name to search 🔤 ',
		},
	]);
try { 
	const { data: customers } = await axios.get(baseUrl + '/customer', {
		params: {text},
		headers: {
			Authorization: 'Bearer ' + globalData.token,
		},
	});

	const formattedCustomers = customers.map((c: any) => ({ customer_name: c.customer_name }));
	console.table(formattedCustomers);
} catch (err: any) {
	console.log(err?.response?.data);
}
}
