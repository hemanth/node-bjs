'use strict';
var assert = require('assert');
var bjs = require('../lib/bjs.js');

it('should return the next bangalorejs event', function (done) {
    bjs.next(function(err,event) {
        assert.strictEqual(Object.keys(event).length, 2);
        done();
    });
});

