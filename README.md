# squash-object

**Flattens and expands objects**

## Installation

```bash
$ npm i --save squash-object
```

## Usage

```js
const squash = require('./index')

let obj = {
  a: 'a',
  b: {
    c: 'c',
    d: 'd',
    e: {
      f: 'f'
    }
  }
}

console.log(obj) // { a: 'a', b: { c: 'c', d: 'd', e: { f: 'f' } } }

obj = squash.flatten(obj)

console.log(obj) // { a: 'a', 'b.c': 'c', 'b.d': 'd', 'b.e.f': 'f' }

obj = squash.expand(obj)

console.log(obj) // { a: 'a', b: { c: 'c', d: 'd', e: { f: 'f' } } }
```
