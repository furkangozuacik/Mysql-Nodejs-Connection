const mysql=require('mysql2');

const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'website',
  password:'123456'
});

let sqlSorgusu = "Select * from products";

connection.connect(function (err) {
  if (err) throw err;

  console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');

  connection.query(sqlSorgusu, function (err, results, fields) {
    if (err) throw err;

    console.log(results);

  });

});

module.exports=connection.promise();
