# baloney
Compact and lightweight Template Literals (Template Strings) processor.

Based on a small [gist](https://gist.github.com/smeijer/6580740a0ff468960a5257108af1384e) a lightweight Template Literals (Template Strings) interpolation function.

## Usage

```JavaScript
const baloney = require('baloney');

baloney('My ${a} is full of eels.',{a:'hovercraft'})
//> My hovercraft is full of eels.

baloney('Answer to the Ultimate Question of Life, the Universe, and Everything is: ${robotic}',{robotic:parseInt(101010, 2)})
//> Answer to the Ultimate Question of Life, the Universe, and Everything is: 42

baloney('Errors are kept to minimum: ${x.o.x.o.x.o.x.o.x.o.x.o.x.o}')
//> Errors are kept to minimum: ${x.o.x.o.x.o.x.o.x.o.x.o.x.o}

baloney('Simple arrays are kind of ${0}', ["supported!"])
//> Simple arrays are kind of supported!

baloney('Including complex arrays... ${A.c.h.0.0.0}! and will make you very brave, if used in production, and bless you for being so mighty! <3', {A:{c:{h:[[['Achooo']]]}}})
//> Including complex arrays... Achooo! and will make you very brave, if used in production, and bless you for being so mighty! <3

baloney('A more complex answer to the Ultimate Question of Life, the Universe, and Everything is still: ${human.answer}',
{human:{answer:['Love', 'Wisdom', 'Funnyness', 'Aardvark', 'Hugs'].map(word=>word.charCodeAt(0)).reduce((a,i)=>a^i)/2}})
//> A more complex answer to the Ultimate Question of Life, the Universe, and Everything is still: 42

baloney('When variable data is not present the interpolator re-prints ${data} (leaves it alone, as it should be).',{})
//> When variable data is not present the interpolator re-prints ${data} (leaves it alone, as it should be).

```
