var server = require("./server");
var router = require("./router");
var app = require("./app");

server.start(router.route, app);
