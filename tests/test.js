import test from 'ava'
import { lds } from '../dist/index.js'


test('foo', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});

test('lds class is available', t => {
	let m = new lds();
	t.truthy(m);
});

test('lds instantiates with a pence amount', t => {
	let m = new lds(1);
	t.is(m.pence, 1);
});

test('lds 12p -> 1s', t => {
	let m = new lds(12);
	t.is(m.pounds, 0);
	t.is(m.shillings, 1);
	t.is(m.pence, 0);
});

test('lds 240p -> £1', t => {
	let m = new lds(240);
	t.is(m.pounds, 1);
	t.is(m.shillings, 0);
	t.is(m.pence, 0);
});