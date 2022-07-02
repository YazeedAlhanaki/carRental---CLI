import { prompt } from 'inquirer';
import { q3 } from './q3'
import { q2 } from './q2'
import chalk from 'chalk';


export async function q4() {
	const { q4Answer } = await prompt({
		type: 'list',
		name: 'q4Answer',
		message: 'Please choose an action 👀!',
		choices: [
			
			'1- Manage Customers 🧾',
			'2- Manage Cars 🚗',
			
		],
		filter: (val) => +val[0],
	});

	switch (q4Answer) {
		case 1:
			await q3();
			break;		

		case 2:
		    await q2();
		    break;

		

		

		default:
			break;
	}
}
