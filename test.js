#!/usr/bin/env -S node --experimental-modules --trace-warnings
const assert = require('assert').strict;
const baloney = require('.');

const expected = [
  'My hovercraft is full of eels.',
  'Answer to the Ultimate Question of Life, the Universe, and Everything is: 42',
  'Errors are kept to minimum: ${x.o.x.o.x.o.x.o.x.o.x.o.x.o}',
  'Simple arrays are kind of supported!',
  'Including complex arrays... Achooo! and will make you very brave, if used in production, and bless you for being so mighty! <3',
  'A more complex answer to the Ultimate Question of Life, the Universe, and Everything is still: 42',
  'When variable data is not present the interpolator re-prints ${data} (leaves it alone, as it should be).'
];

const actual = [
  baloney('My ${a} is full of eels.',{a:'hovercraft'}),
  baloney('Answer to the Ultimate Question of Life, the Universe, and Everything is: ${robotic}',{robotic:parseInt(101010, 2)}),
  baloney('Errors are kept to minimum: ${x.o.x.o.x.o.x.o.x.o.x.o.x.o}'),
  baloney('Simple arrays are kind of ${0}', ["supported!"]),
  baloney('Including complex arrays... ${A.c.h.0.0.0}! and will make you very brave, if used in production, and bless you for being so mighty! <3', {A:{c:{h:[[['Achooo']]]}}}),
  baloney('A more complex answer to the Ultimate Question of Life, the Universe, and Everything is still: ${human.answer}', {human:{answer:['Love', 'Wisdom', 'Funnyness', 'Aardvark', 'Hugs'].map(word=>word.charCodeAt(0)).reduce((a,i)=>a^i)/2}}),
  baloney('When variable data is not present the interpolator re-prints ${data} (leaves it alone, as it should be).',{})
];

assert.deepStrictEqual(expected, actual);
