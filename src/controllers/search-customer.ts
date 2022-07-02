import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function searchCustomer() {
	const {text} = await prompt([
		{
			type: 'input',
			name: 'text',
			message: 'Enter name to search 🔤 ',
		},
	]);

	const { data: customers } = await axios.get(baseUrl + '/customer', {
		params: {text},
	});
	const formattedCustomers = customers.map((c: any) => ({ customer_name: c.customer_name }));
	console.table(formattedCustomers);
}
