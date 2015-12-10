var express = require('express');
var router = express.Router();
var users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
   renderUsers(req, res, next)
});

router.post('/', function(req, res, next) {
  users.add(req.body,function(err, data){
     if (err) res.send(err);
     renderUsers(req, res, next);
  })
});

function renderUsers(req, res, next){
   users.get(function(err, data){
      if (err) res.send(err);
      res.render("users", data);
   });
}

module.exports = router;
