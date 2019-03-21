const express = require('express'),  // 加载express模块
app = express();  // 启动一个web服务器

app.get('/',function (req, res) {
    res.send('Hello Node.js!');
})

const server = app.listen(3000, function () {
    let port = server.address().port;
    console.log('app listening at http://%s:%s', 'localhost', port);    
})

