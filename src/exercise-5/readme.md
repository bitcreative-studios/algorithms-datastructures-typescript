### Exercise

Given a string and a value such as:

```js
var str = "asdf[0][1][1].sss.ddd"
var value = 2
```

Create a function that when given an object and a key path, it assigns a value to the given key path such that:

```js
var obj = {};
deepAssignment(obj, str, value)
obj.asdf[0][1][1].sss.ddd === 2
```

Also try to keep Array and Objects types:

```js
Array.isArray(obj.asdf[0][1][1]) === true
isObject(obj.asdf[0][1][1]) === false
isObject(obj.asdf[0][1][1].sss) ==== true
```

