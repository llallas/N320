## Assignment 2: Node.js Modules

### Running a node script

run it:

- directly in the terminal
- through a npm package script shortcut

```console
node index.js
node index
node ./functions
```

```json
    "scripts": {
    "start": "node index.js",
    "shs": "node ./functions"
  },
```

### Importing and exporting files in node.js

Import Using another file for your script

```js
const fileVar = require("./filepath/fileName.js");
```

Export - allowing variables / methods to be used by other scripts

```js
const thingToUse = 3.1415926535897323842643338;

module.exports = {
  thingsToUse: thingsToUse,
};
```
