var mysql = require('mysql');

var db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'nodejs_poc'
});

db.connect();

var dao = module.exports;


dao.getUsers = function(cb){
   db.query('SELECT * FROM users', function(err, rows, fields){
      if (err) cb("DB ERROR");
      console.log("DB RESPONSE: ", rows );
      cb(null, rows);
   });
};

dao.insertUser = function(name, email, cb) {
   db.query('INSERT into users (name, email) values (?,?)', [name,email],function(err, data){
      if (err) cb("DB ERROR");
      cb(null, data);
   })
}