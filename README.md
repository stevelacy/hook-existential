# Existential operator hooking

[![Build Status](https://travis-ci.org/stevelacy/hook-existential.png?branch=master)](https://travis-ci.org/stevelacy/hook-existential)
[![NPM version](https://badge.fury.io/js/hook-existential.png)](http://badge.fury.io/js/hook-existential)

> hook for adding existential operations to JS


### Example

```js

function imageResponse (body) {
  if (body?.content?.image) {
    return body.content
  }
  // ...
}

```

Becomes:

```js
function imageResponse (body) {
  if (body && body.content && body.content.image) {
    return body.content
  }
  // ...
}
```


#### function existential operations also supported

```js
const test = (args) => return args.split(' ')

test?()
```

Becomes:

```js
const test = (args) => return args.split(' ')

test && typeof test === "function" && test()
```

### Usage

```js
// hook.js
require('hook-existential')
require('./app')
```

```js
// app.js

console.log(module?.exports?.default)
```

### License [MIT](LICENSE)
