        const express = require('express')
        const app = express()
        const port = 3000   //端口  自定义
        var mysql      = require('mysql'); //引入模块
        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'root',
            database : 'vue2008'
        });

        connection.connect();

        app.all('*', function(req, res, next) {

            res.header("Access-Control-Allow-Origin", "*");

            res.header("Access-Control-Allow-Headers", "X-Requested-With");

            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

            res.header("X-Powered-By",' 3.2.1');

            res.header("Content-Type", "application/json;charset=utf-8");

            next();

        });

        connection.query('select user_id,user_name,email from p_users limit 10', function (error, results, fields) {
            //获取查询结果 results
            if(error){
                console.log("数据库链接失败")
            }else {
                //发送数据
                app.get('/', (req, res) => {
                    res.send(fields)
                })
            }
        });
        //关闭数据库
        connection.end();


        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })