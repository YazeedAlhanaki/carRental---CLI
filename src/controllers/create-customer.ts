import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl, token } from '..';

export async function createCustomer() {
	const customerData = await prompt([
		{
			type: 'input',
			name: 'customer_name',
			message: 'Enter customer name 🔤 ',
		},
		{
			type: 'input',
			name: 'customer_age',
			message: 'Enter customer age ',
		},
		{
			type: 'input',
			name: 'customer_credentials',
			message: 'Enter customer credentials ',
		},
		{
			type: 'input',
			name: 'customer_contact',
			message: 'Enter customer contact ',
		},
		
	]);

	await axios.post(
		baseUrl + '/customer',
		{
			
			...customerData,
		},
		{
			headers: {
				authorization: 'Bearer ' + token,
			},
		}
	);

	console.log(`customer for ${customerData}, has been added ✅`);
}
