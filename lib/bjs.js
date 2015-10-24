#!/usr/bin/env node
var got = require('got');
var API = 'https://api6.min.sh/bangalorejs/events';
exports.next = function(cb){
  if (typeof cb !== 'function') {
    throw new Error("Expected a callback!");
  }
  got(API, function(error, body, response) {
    body = JSON.parse(body);
    console.log(body.events[0].where);
    cb({
        where: body.events[0].where,
        when: body.events[0].when
    })
  });
};
