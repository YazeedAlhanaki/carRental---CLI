import axios from 'axios';
import chalk from 'chalk';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

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

	try {
		const result = await axios.post(baseUrl + '/user/login', {
			username,
			password,
		});
		const newToken = result.data.token;
		globalData.token = newToken;
	} catch (err: any) {
		console.log(err?.response?.data);
		process.exit(0);
	}
}
	

