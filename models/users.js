
var dao = require('../lib/dao');

var  users = module.exports;

users.get = function(cb){
   dao.getUsers(function(err,data) {
      if (err) cb(err);
      cb(null,{
         title: "USERS TABLE",
         message: "Here be some users",
         data: data
      });
   })
};

users.add = function(user, cb){
   dao.insertUser(user.name, user.email, function( err, data){
      if (err) cb(err);
      cb();
   })
};