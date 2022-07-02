import chalk from 'chalk';
import { prompt } from 'inquirer';

export async function q1() {
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: (chalk.blue('Please LOGIN before continuing!')),
		choices: ['Login', 'Quit'],
		filter: (val) => val.toLowerCase(),
	});

	if (q1Answer === 'quit') {
		console.log('hope to see you again');
		process.exit(0);
	}

	const { username, password } = await prompt([
		{
			type: 'input',
			name: 'username',
			message: (chalk.bgYellowBright('Enter your username 📝 ')),
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'password',
			name: 'password',
			message: (chalk.bgYellowBright('Enter your password 📝 ')),
		},
	]);

	if (username !== 'yazeed' || password !== '111') {
		console.log('Wrong username & password, bye!');
		process.exit(0);
	}
}
