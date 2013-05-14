## angular-browser-storage

This is an Angular.js module that provides easy access (read/write/remove/clear) to the browsers local and session storage.

#### Usage

Your app must list browserStorage as a dependancy. You can then list in your Controllers the browserStorage service as dependancy and use it.

##### Save
<pre>
// Saves to localStorage
browserStorage.local.save('mykey', 'myvalue');
// Saves to sessionStorage
browserStorage.session.save('mykey', 'myvalue');
</pre>

##### Save with expiration (in milliseconds)
<pre>
// saves the key for 1 second.
// When you will try to load it, after the 1 second, it will return null and delete the entry
browserStorage.local.save('mykey', 'myvalue', 1000);
browserStorage.session.save('mykey', 'myvalue', 1000);
</pre>

##### Load
<pre>
// Loads from localStorage
browserStorage.local.load('mykey');
// Loads from localStorage
browserStorage.session.load('mykey');
</pre>

##### Remove
<pre>
// Removes this key from localStorage
browserStorage.local.remove('mykey');
// Removes this key from localStorage
browserStorage.session.remove('mykey');
</pre>

##### Clear
<pre>
// Removes everything from localStorage
browserStorage.local.clear();
// Removes everything from localStorage
browserStorage.session.clear();
</pre>
