/**
 * Created by JetBrains WebStorm.
 * User: kokamoto
 * Date: 12/04/14
 * Time: 22:07
 * To change this template use File | Settings | File Templates.
 */
// モジュールの読み込み
var express = require('express');

// サーバを作成
var app = express.createServer();

// '/' のリクエストハンドラ
app.get('/', function(req, res) {
    res.sendfile('index.html');
});

// サーバを起動
app.listen(8124, '127.0.0.1');