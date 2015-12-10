var express = require('express');
var router = express.Router();
var dao = require('../lib/dao');

/* GET users listing. */
router.get('/', function(req, res, next) {
   dao.getUsers(function(err,data){
      if (err) res.send("DB ERROR");
      res.send(data);
   })
});

module.exports = router;
