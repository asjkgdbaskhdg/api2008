var mysql      = require('mysql'); //引入模块
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'vue2008'
});

connection.connect();

connection.query('select user_id,user_name,email from p_users limit 10', function (error, results, fields) {
    //获取查询结果 results
    console.log(results[1].user_name)
});

connection.end();