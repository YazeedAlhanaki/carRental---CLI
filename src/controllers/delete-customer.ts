import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

export async function deleteCustomer() {
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
		message: 'Enter index to delete ❌',
		filter: (val:string) => val,
	});
	const customer = customers[index];
	console.log(customer.customer_id)
	await axios.delete(baseUrl + `/customer/${customer.customer_id}`, {
		headers: {
			Authorization: 'Bearer ' + globalData.token,
		},
	});
	console.log(`customer for ${customer.carName} has been deleted ✅`);
} catch (err: any) {
	console.log(err?.response?.data);
}
}
