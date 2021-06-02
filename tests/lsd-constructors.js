import test from 'ava'
import { lsd } from '../dist/index.js'

test('class is available', t => {
	let m = new lsd();
	t.truthy(m);
});

test('instantiates with a pence amount', t => {
	let m = new lsd(1);
	t.is(m.pence, 1);
});

test('12p -> 1s', t => {
	let m = new lsd(12);
	t.is(m.pounds, 0);
	t.is(m.shillings, 1);
	t.is(m.pence, 0);
});

test('240p -> £1', t => {
	let m = new lsd(240);
	t.is(m.pounds, 1);
	t.is(m.shillings, 0);
	t.is(m.pence, 0);
});

test('959p -> £3/19/11', t => {
	let m = new lsd(959);
	t.is(m.pounds, 3);
	t.is(m.shillings, 19);
	t.is(m.pence, 11);
});

test('s <= 20 and p <= 12 always, up to 1000d', t => {
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