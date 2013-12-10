#!/usr/bin/env node
exports.next = function(cb){
  var nom = require('nom');
  var url = 'http://bangalorejs.org/';
  nom(url, function(err, $) {
    var fetch = $('meta[http-equiv="refresh"]')[0].attribs.content.split("=")[1];
    nom(url+fetch,function(err,$) {
      var res = $('.orange');
      var when = res.eq(1).text();
      var url = res.eq(-1).text();
      url = url.indexOf("http") === 0 ? url : '[ Wait for the next event... ]';
      var msg = when + url;
      cb(msg);
    });
  });
};