import { q1 } from './questions/q1';
import { q2 } from './questions/q2';
import { q4 } from './questions/q4';
import chalk from 'chalk';
import { q3 } from './questions/q3';

export const baseUrl = 'http://0.0.0.0:3002';
export let token = '77777';

async function start() {
	console.log();
	console.log();
	console.log((chalk.bgAnsi256(194).bold('WELCOME TO CAR RENTAL MANAGER')));
	console.log();
	console.log();

	
	await q1();

	await q4();
	
	while (true) {
		await q3();

		console.log();
		console.log();
	}
}

start();
