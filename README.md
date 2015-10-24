# bjs [![Build Status](https://secure.travis-ci.org/hemanth/node-bjs.png?branch=master)](http://travis-ci.org/hemanth/node-bjs)

Next [BangaloreJS](http://bangalorejs.org/) event on CLI.

## Getting Started
Install the module with: ```npm install -g bjs```

## Usage :

In console -> ```$ bjs``` 

Would return something like : ```Next meetup is at HackerEarth office on Sat Oct 31 2015 10:30:00 GMT+0530 (IST).```

In node script :

```js
bjs = require('bjs');
bjs.next(function(error, event){
	console.log(event);
});
```

## License
Copyright (c) 2013 Hemanth.HM. Licensed under the MIT license.
