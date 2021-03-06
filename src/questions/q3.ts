import { prompt } from 'inquirer';
import { createCustomer } from '../controllers/create-customer';
import { deleteCustomer } from '../controllers/delete-customer';
import { getCustomers } from '../controllers/get-customer';
import { searchCustomer } from '../controllers/search-customer';
import { updateCustomer } from '../controllers/update-customer';
import chalk from 'chalk';


export async function q3() {
	const { q3Answer } = await prompt({
		type: 'list',
		name: 'q3Answer',
		message: (chalk.greenBright('Please choose an action ๐!')),
		choices: [
			
			'1- View Customers ๐งพ',
			'2- add a new customer ๐งพ',
			'3- update a customer ๐งพ',
			'4- delete a customer ๐งพ',
			'5- search customer by name ๐งพ',
			'6- Quit app',
		],
		filter: (val) => +val[0],
	});

	switch (q3Answer) {
		case 1:
			await getCustomers();
			await q3()
			break;		

		case 2:
		    await createCustomer();
			await q3()
		    break;

		case 3:
		    await updateCustomer();
			await q3()
	     	break;
			
		case 4:
			await deleteCustomer();
			await q3()
			break;			 

		case 5:
			await searchCustomer();
			await q3()
			break;	

		case 6:
			console.log('Byyyye ๐!');
			process.exit(0);

		default:
			break;
	}
}
