import { prompt } from 'inquirer';
import { createCar } from '../controllers/create-car';
import { deleteCar } from '../controllers/delete-car';
import { getCars } from '../controllers/get-car';
import { searchCar } from '../controllers/search-car';
import { updateCar } from '../controllers/update-car';
import { getChaeapest } from '../controllers/cheapest';
import chalk from 'chalk';

export async function q2() {
	const { q2Answer } = await prompt({
		type: 'list',
		name: 'q2Answer',
		message: 'Please choose an action 👀!',
		choices: [
			'1- View cars 🚗',
			'2- Add new car 🚗',
			'3- Update car 🚗',
			'4- Delete car 🚗',
			'5- Search car by name 🚗',
			'6- Cheapest car available 🚗',
			'7- Quit app',
		],
		filter: (val) => +val[0],
	});

	switch (q2Answer) {
		case 1:
			await getCars();
			break;

		case 2:
			await createCar();
			break;

		case 3:
			await updateCar();
			break;

		case 4:
			await deleteCar();
			break;

		case 5:
			await searchCar();
			break;

		case 6:
		await getChaeapest();
		break;

		case 7:
			console.log('Byyyye 👊!');
			process.exit(0);

		default:
			break;
	}
}
