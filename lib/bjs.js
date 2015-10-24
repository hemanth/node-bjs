#!/usr/bin/env node
var got = require('got');
var API = 'https://api6.min.sh/bangalorejs/events';
exports.next = function(cb){
  if (typeof cb !== 'function') {
    throw new Error("Expected a callback!");
  }
  got(API, function(error, body, response) {
    if(!error) {
        body = JSON.parse(body);
        cb(null,{
            where: body.events[0].where,
            when: body.events[0].when
        });
    } else {
        cb(error)
    }
  });
};
