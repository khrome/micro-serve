#!/usr/bin/env node

//unassuming server wrapper
var Server = require('whammo');

var micro = {
    express : function(expressInstance){
        var expressMiddleware = require('./frameworks/express.js');
        return function(){
            var server = new Server();
            expressInstance.use(expressMiddleware(server));
            server.listen = function(port){
                return expressInstance.listen(port);
            }
            return server;
        }
    }
};

module.exports = micro;

