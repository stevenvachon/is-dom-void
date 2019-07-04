# is-dom-void [![NPM Version][npm-image]][npm-url] ![File Size][filesize-image] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Monitor][greenkeeper-image]][greenkeeper-url]

> Determine if an object is a [void `HTMLElement`](https://www.w3.org/TR/html5/syntax.html#void-elements) (from any `Realm`).


## Installation

[Node.js](http://nodejs.org) `>= 10` is required. To install, type this at the command line:
```shell
npm install is-dom-void
```


## Importing

ES Module:
```js
import isDOMVoidElement from 'is-dom-void';
```

CommonJS Module:
```js
const isDOMVoidElement = require('is-dom-void');
```


## Usage

```js
isDOMVoidElement(document.createElement('div')); //-> false
isDOMVoidElement(document.createElement('input')); //-> true
````


[npm-image]: https://img.shields.io/npm/v/is-dom-void.svg
[npm-url]: https://npmjs.com/package/is-dom-void
[filesize-image]: https://img.shields.io/badge/size-530B%20gzipped-blue.svg
[travis-image]: https://img.shields.io/travis/stevenvachon/is-dom-void.svg
[travis-url]: https://travis-ci.org/stevenvachon/is-dom-void
[coveralls-image]: https://img.shields.io/coveralls/stevenvachon/is-dom-void.svg
[coveralls-url]: https://coveralls.io/github/stevenvachon/is-dom-void
[greenkeeper-image]: https://badges.greenkeeper.io/stevenvachon/is-dom-void.svg
[greenkeeper-url]: https://greenkeeper.io/
