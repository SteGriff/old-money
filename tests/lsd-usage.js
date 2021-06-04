import test from 'ava'
import { lsd } from '../dist/index.js'

test('Integration - Wages', t => {
	
	let bank = new lsd(100,0,0);
	t.is(bank.pounds, 100);
	t.is(bank.shillings, 0);
	t.is(bank.pence, 0);
	
	let interest = bank.totalPence * 0.05;
	bank.addPence(interest);
	
	t.is(bank.totalPence, 25200);
	t.is(bank.pounds, 105);
	t.is(bank.shillings, 0);
	t.is(bank.pence, 0);
	
	let wage = new lsd(0,19,6); //234d
	for(let i = 0; i < 55; i++)
	{
		// 12870d total wage bill
		bank.addPence(-wage.totalPence);
	}
	
	// 12330d remain
	t.is(bank.totalPence, 12330);
	t.is(bank.pounds, 51);
	t.is(bank.shillings, 7);
	t.is(bank.pence, 6);
	
	
});