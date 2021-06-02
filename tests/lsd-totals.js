import test from 'ava'
import { lsd } from '../dist/index.js'

test('totalPence 1000', t => {
	let m = new lsd(1000);
	t.is(m.totalPence, 1000);
});

test('totalShillings 98 (£4/18/0)', t => {
	let m = new lsd(1176);
	t.is(m.pounds, 4);
	t.is(m.shillings, 18);
	t.is(m.pence, 0);
	t.is(m.totalShillings, 98);
});
