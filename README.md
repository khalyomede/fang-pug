# Fang Pug

[Fang](https://www.npmjs.com/package/@khalyomede/fang-pug) plugin for pug.

## Summary

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Install [fang](https://www.npmjs.com/package/@khalyomede/fang-pug)

```bash
npm install --save-dev @khalyomede/fang@0.*
```

2. Install this package

```bash
npm install --save-dev @khalyomede/fang-pug@0.*
```

3. Add a script alias

```javascript
// package.json
{
    "scripts": {
        "fang": "fang"
    }
}
```

4. Add a task file (at the root of your folder)

```javascript
// fang.js
const fang = require('@khalyomede/fang');
const pug = require('@khalyomede/fang-pug');

const html = () => fang.from('src/**/*.pug')
  .do(pug())
  .save('dist');

const build = [html];

module.exports = { build };
```

## Usage

- [Example 1: simple usage](#example-1-simple-usage)
- [Example 2: with options](#example-2-with-options)

### Example 1: simple usage

In this example, we will render our pug file into html files.

```javascript
// fang.js
const fang = require('@khalyomede/fang');
const pug = require('@khalyomede/fang-pug');

const html = () => fang.from('src/**/*.pug')
  .do(pug())
  .save('dist');

const build = [html];

module.exports = { build };
```

### Example 2: with options

In this example, we will use [pug options](https://www.npmjs.com/package/pug#options) to customize the behavior of this package.

```javascript
// fang.js
const fang = require('@khalyomede/fang');
const pug = require('@khalyomede/fang-pug');

const html = () => fang.from('src/**/*.pug')
  .do(pug({
      pretty: true // Add pretty-indentation whitespace to the file content
  }))
  .save('dist');

const build = [html];

module.exports = { build };
```