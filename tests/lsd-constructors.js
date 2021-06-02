import test from 'ava'
import { lsd } from '../dist/index.js'

test('class is available', t => {
	let m = new lsd();
	t.truthy(m);
});

/* Pence Constructor */

test('instantiates with a pence amount', t => {
	let m = new lsd(1);
	t.is(m.pounds, 0);
	t.is(m.shillings, 0);
	t.is(m.pence, 1);
});

test('12d -> 1s', t => {
	let m = new lsd(12);
	t.is(m.pounds, 0);
	t.is(m.shillings, 1);
	t.is(m.pence, 0);
});

test('240d -> £1', t => {
	let m = new lsd(240);
	t.is(m.pounds, 1);
	t.is(m.shillings, 0);
	t.is(m.pence, 0);
});

test('959d -> £3/19/11', t => {
	let m = new lsd(959);
	t.is(m.pounds, 3);
	t.is(m.shillings, 19);
	t.is(m.pence, 11);
});

test('s <= 20 and d <= 12 always, up to 1000d', t => {
	for(let d = 0; d < 1000; d++)
	{
		let m = new lsd(d);
		if (m.shillings > 20 || m.pence > 12)
		{
			t.fail();
		}
	}
	t.pass();
});

/* Pounds/Shillings/Pence Constructor */

test('£1/1/1 -> 253d', t => {
	let m = new lsd(1, 1, 1);
	t.is(m.totalPence, 253);
	t.is(m.pounds, 1);
	t.is(m.shillings, 1);
	t.is(m.pence, 1);
});

test('£1/41/25 -> 757d -> £3/3/1', t => {
	let m = new lsd(1, 41, 25);
	t.is(m.totalPence, 757);
	t.is(m.pounds, 3);
	t.is(m.shillings, 3);
	t.is(m.pence, 1);
});