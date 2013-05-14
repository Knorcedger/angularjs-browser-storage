## angular-browser-storage v1.0.0 ([Download](https://raw.github.com/Knorcedger/angular-browser-storage/master/src/browserStorage.js))

This is an Angular.js module that provides easy access (read/write/remove/clear) to the browser's local and session storage.

#### Demo

http://jsfiddle.net/Knorcedger/nR4My/

The jsfiddle demo also exists inside the repository in the demo folder.

#### Usage

Your app must list browserStorage as a dependency. Then, you should also list the browserStorage service as dependancy in your Controllers.

##### Save
```javascript
// Saves to localStorage
browserStorage.local.save('mykey', 'myvalue');
// Saves to sessionStorage
browserStorage.session.save('mykey', 'myvalue');
```

##### Save with expiration (in milliseconds)
```javascript
// saves the key for 1 second.
// When you will try to load it, after the 1 second, it will return null and delete the entry
browserStorage.local.save('mykey', 'myvalue', 1000);
browserStorage.session.save('mykey', 'myvalue', 1000);
```

##### Load
```javascript
// Loads from localStorage
browserStorage.local.load('mykey');
// Loads from localStorage
browserStorage.session.load('mykey');
```

##### Remove
```javascript
// Removes this key from localStorage
browserStorage.local.remove('mykey');
// Removes this key from localStorage
browserStorage.session.remove('mykey');
```

##### Clear
```javascript
// Removes everything from localStorage
browserStorage.local.clear();
// Removes everything from localStorage
browserStorage.session.clear();
```
