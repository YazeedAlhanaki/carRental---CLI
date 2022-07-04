import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

export async function updateCustomer() {

	try { 
		const { data: customers } = await axios.get(baseUrl + '/customer' , {
			headers: {
				Authorization: 'Bearer ' + globalData.token,
			},
		})

	
	const formattedCustomers = customers.map((c: any) => ({ customer_name: c.customer_name, customer_age: c.customer_age , customer_contact: c.customer_contact }));
	console.table(formattedCustomers);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🗂',
		filter: (val) => +val,
	});
	const customer = customers[index];

	const newCustomer = await prompt([
		{
			type: 'input',
			name: 'customer_name',
			message: `Enter new name or press enter to keep it as (${customer.customer_name})`,
			filter: (val) => {
				if (val.trim() === '') return customer.customer_name;
				return val;
				
			},
		},
		{
			type: 'input',
			name: 'customer_age',
			message: `Enter new age or press enter to keep it as (${customer.customer_age})`,
			filter: (val) => {
				if (val.trim() === '') return customer.customer_age;
				return val;
			},
		},
	]);

	await axios.patch(baseUrl + `/customer/${customer.customer_id}`, newCustomer , {
		headers: {
			Authorization: 'Bearer ' + globalData.token,
		},
	});

	console.log(`Customer for ${customer.customer_name}, has been updated ✅`);
} catch (err: any) {
	console.log(err?.response?.data);
}
}
