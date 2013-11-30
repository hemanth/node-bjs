'use strict';

var bjs = require('../lib/bjs.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

// Needs some fix.
exports['bjs'] = {
  setUp: function(done) {
    done();
  },
  'next': function(test) {
    bjs.next(function(event){
     setTimeout(function(){
        console.log('dfd');
        test.equal(event,'');
      });
    });
    test.done();
  }
};

exports.next = function(test) {

    bjs.next(function(event){
      setTimeout(function(){
        test.equal(event,'123');
      });
      
    });
    test.done();
};
