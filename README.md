# Existential operator hooking

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

```

function imageResponse (body) {
  if (body && body.content && body.content.image) {
    return body.content
  }
  // ...
}
```
