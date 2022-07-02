import axios from 'axios';
import { baseUrl } from '..';

export async function getCustomers() {
	const { data: customers } = await axios.get(baseUrl + '/customer');
	const formattedCustomers = customers.map((c: any) => ({ customer_name: c.customer_name, customer_age: c.customer_age , customer_contact: c.customer_contact }));
	console.table(formattedCustomers);
}