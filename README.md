# bjs [![Build Status](https://secure.travis-ci.org/hemanth/bjs.png?branch=master)](http://travis-ci.org/hemanth/bjs)

Next [BangaloreJS](http://bangalorejs.org/) event on CLI.

## Getting Started
Install the module with: ```npm install -g bjs```

## Usage :
In console -> ```$ bjs``` 
Would return something like : ```Saturday, November 30th, 10:30-13:30  => http://bangalorejs10.eventbrite.com```

In node script :
```
bjs = require('bjs');
bjs.next(function(event){
	console.log(event);
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2013 Hemanth.HM. Licensed under the MIT license.
