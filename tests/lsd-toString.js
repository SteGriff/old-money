import test from 'ava'
import { lsd } from '../dist/index.js'

test('toString() £0/0/1', t => {
	let m = new lsd(1);
	let actual = m.toString();
	t.is(actual, "£0/0/1");
});

test('toString() £1/1/1', t => {
	let m = new lsd(253);
	let actual = m.toString();
	t.is(actual, "£1/1/1");
});

test('toString() £3/19/11', t => {
	let m = new lsd(959);
	let actual = m.toString();
	t.is(actual, "£3/19/11");
});

test('implicit toString()', t => {
	let m = new lsd(90);
	let actual = "It costs " + m + " for a seat in the pit stalls";
	let expected = "It costs £0/7/6 for a seat in the pit stalls";
	t.is(actual, expected);
});

test('toString(fmt) £2. 3s. 6d.', t => {
	let m = new lsd(522);
	let actual = m.toString("£$l. $ss. $dd.");
	let expected = "£2. 3s. 6d.";
	t.is(actual, expected);
});

test('toString(fmt) 2 pounds, 3 and 6', t => {
	let m = new lsd(522);
	let actual = m.toString("$l pounds, $s and $d");
	let expected = "2 pounds, 3 and 6";
	t.is(actual, expected);
});