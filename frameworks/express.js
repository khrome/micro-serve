#!/usr/bin/env node


module.exports = function(server){
    return function(req, res, next){
        server.options.handlers['http'](req, res, function(){
            next();
        });
    }
};

