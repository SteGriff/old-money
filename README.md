# old-money

💷 TS module for Pounds, Shillings, and Pence (lsd/£sd)

Uses ECMAScript Modules so you'll need Node 14+

**WIP** - not finished, not on npm yet

## Install + Build

Built with esbuild

```
npm i
npm run watch
```

or `npm run build`

## Test

Tests use ava. 

```
npm test
```

## Usage

```
import { lsd } from 'old-money'

let money = new lsd(959);
console.log(money.toString());
console.log(money.pounds, money.shillings, money.pence);
```

## API

### new lsd(pence)

Create a new lsd money object with a total number of pence:

```
let m = new lsd(6);
```

### new lsd(pounds, shillings, pence)

Create a new lsd money object using three "stacks" of coin types. These will be converted into a total number of pence and rationalised: 

```
let m = new lsd(1, 41, 25);
console.log(m.totalPence);
// 757
console.log(m.pounds, m.shillings, m.pence);
// 3, 3, 1	
```

### lsd.toString()

Get the money amount as a string in the default format like "£3/19/11"

```
let m = new lsd(959);
console.log(m.toString());
// "£3/19/11"
```

### lsd.toString(format)

Format your own string using `$l`, `$s`, and `$d` for pounds, shillings, and pence respectively. 

```
let m = new lsd(522);
console.log(m.toString("£$l. $ss. $dd."));
// "£2. 3s. 6d."
console.log(m.toString("$l pounds, $s and $d"));
// "2 pounds, 3 and 6"
```

### lsd.pounds, lsd.shillings, and lsd.pence

Get the individual, bounded number of pounds, shillings, and pence, with an upper bound on shillings (20) and pence (12):

```
let m = new lsd(959);
console.log(m.pounds, m.shillings, m.pence);
// 3, 19, 11
```

### lsd.totalPence

Get the whole amount as a total number of pence:

```
let m = new lsd(959);
console.log(m.totalPence);
// 959
```

### lsd.totalShillings

Get the whole amount as a total whole number of shillings, as some shops did:

```
let m = new lsd(1176);
console.log(m.totalShillings);
// 98
```

### lsd.addPounds(pounds), lsd.addShillings(shillings), and lsd.addPence(pence)

Add the specified number of pounds, shillings, or pence. Pence can be greater than 12 and shillings greater than 20 because the amount will be rationalised into a whole number of pence:

```
let m = new lsd(12); //12d (one shilling)
m.addShillings(19); // Adds up to 20s, that is, £1

console.log(m.toString());
// "£1/0/0"
```

### lsd.add(lsd)

Add together two `lsd` objects:

```
let m = new lsd(1,2,6);
let n = new lsd(0,2,6);
m.add(n);

console.log(m.toString());
// "£1/5/0"
// n is unchanged
```
