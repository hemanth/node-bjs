#!/usr/bin/env node
exports.next = function(cb){
  var nom = require('nom');
  var url = 'http://bangalorejs.org/';
  nom(url, function(err, $) {
    var fetch = $('meta[http-equiv="refresh"]')[0].attribs.content.split("=")[1];
    nom(url+fetch,function(err,$) {
      var res = $('.orange');
      cb(res.eq(1).text() + " => " + res.eq(-1).text());
    });
  });
};