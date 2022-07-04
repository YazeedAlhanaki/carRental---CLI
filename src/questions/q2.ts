import { prompt } from 'inquirer';
import { createCar } from '../controllers/create-car';
import { deleteCar } from '../controllers/delete-car';
import { getCars } from '../controllers/get-car';
import { searchCar } from '../controllers/search-car';
import { updateCar } from '../controllers/update-car';
import { getChaeapest } from '../controllers/cheapest';
import chalk from 'chalk';
import { getMostExpensive } from '../controllers/most-expensive';

export async function q2() {
	const { q2Answer } = await prompt({
		type: 'list',
		name: 'q2Answer',
		message: (chalk.greenBright('Please choose an action 👀!')),
		choices: [
			'1- View cars 🚗',
			'2- Add new car 🚗',
			'3- Update car 🚗',
			'4- Delete car 🚗',
			'5- Search car by name 🚗',
			'6- Cheapest car available 🚗',
			'7- Most expensive car available 🚗',
			'8- Quit app',
		],
		filter: (val) => +val[0],
	});

	switch (q2Answer) {
		case 1:
			await getCars();
			await q2()
			break;

		case 2:
			await createCar();
			await q2()
			break;

		case 3:
			await updateCar();
			await q2()
			break;

		case 4:
			await deleteCar();
			await q2()
			break;

		case 5:
			await searchCar();
			await q2()
			break;

		case 6:
		await getChaeapest();
		await q2()
		break;

		case 7:
		await getMostExpensive();
		await q2()
		break;

		case 8:
			console.log('Byyyye 👊!');
			process.exit(0);

		default:
			break;
	}
}
