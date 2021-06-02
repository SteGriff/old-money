import test from 'ava'
import { lsd } from '../dist/index.js'

test('addPence 1d+1d = 2d', t => {
	let m = new lsd(1);
	m.addPence(1);
	t.is(m.pence, 2);
});

test('addPence 1d+11d = £0/1/0', t => {
	let m = new lsd(1);
	m.addPence(11);
	t.is(m.pounds, 0);
	t.is(m.shillings, 1);
	t.is(m.pence, 0);
});

test('addShillings 1s+1s = 2s', t => {
	let m = new lsd(12);
	m.addShillings(1);
	t.is(m.shillings, 2);
	t.is(m.pence, 0);
});

test('addShillings 1s+19s = £1/0/0', t => {
	let m = new lsd(12);
	m.addShillings(19);
	t.is(m.pounds, 1);
	t.is(m.shillings, 0);
	t.is(m.pence, 0);
});

test('addPounds £1+£1 = £2', t => {
	let m = new lsd(240);
	m.addPounds(1);
	t.is(m.pounds, 2);
	t.is(m.shillings, 0);
	t.is(m.pence, 0);
});
