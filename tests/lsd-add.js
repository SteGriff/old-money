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

test('add(lsd) £1/2/6 + 2/6 = £1/5/0', t => {
	let m = new lsd(1,2,6);
	let n = new lsd(0,2,6);
	m.add(n);
	t.is(m.pounds, 1);
	t.is(m.shillings, 5);
	t.is(m.pence, 0);
	
	// n is unchanged
	t.is(n.pounds, 0);
	t.is(n.shillings, 2);
	t.is(n.pence, 6);
});

test('add(lsd) 0 + 0 = 0', t => {
	let m = new lsd();
	let n = new lsd();
	m.add(n);
	t.is(m.totalPence, 0);
	t.is(n.totalPence, 0);
});