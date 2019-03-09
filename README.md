# Fang Pug

Compile Pug files to html using [pug](https://www.npmjs.com/package/pug). See [Pug documentation](https://pugjs.org/api/getting-started.html) to learn more about this language.

## Summary

- [Installation](#installation)
- [Usage](#usage)

## Installation

Install globally [`@khalyomede/fang`](https://www.npmjs.com/package/@khalyomede/fang) if you did not yet.

NPM:

```bash
npm install --save-dev @khalyomede/fang-pug@0.* @khalyomede/fang@0.*
```

Yarn:

```bash
yarn add --dev @khalyomede/fang-pug@0.* @khalyomede/fang@0.*
```

## Usage

- [Basic usage](#basic-usage)

### Basic usage

In this example, we will compile our pug file into html.

_fang.js_
```javascript
const fang = require('fang');
const fangPug = require('fang-pug');

const pug = () => fang.from('src/pug/**/*.pug')
    .do(fangPug())
    .save('dist');

const build = [pug];

module.exports = { build };
```

```bash
> yarn fang build
```

