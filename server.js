//unassuming server wrapper
var Server = require('whammo');

var defaultTypes = [
    'png', 'gif', 'jpg', 'jpeg', 'json', 'js', 'html', 'css',
    'ttf', 'eot', 'woff', 'ico', 'otf', 'svg'
];

function microserve(options){
    if(!options) options = {};
    var application;
    if(options.express){
        application = new Server({
            actions : [
                //first look for any static files
                { name : 'http-file', with:{types:options.types || defaultTypes}},
                // always load GET vars
                { name : 'get-vars' },
                // always load POST vars
                { name : 'post-vars'},
                { name : 'director-router', with : {
                    routes : options.director
                }},
                { name : '404' }
            ]
        });
    }
    if(options.director){
        application = new Server({
            actions : [
                //first look for any static files
                { name : 'http-file', with:{types:options.types || defaultTypes}},
                // always load GET vars
                { name : 'get-vars' },
                // always load POST vars
                { name : 'post-vars'},
                { name : 'director-router', with : {
                    routes : options.director
                }},
                { name : '404' }
            ]
        });
    }
    if(!application){
        application = new Server({
            actions : [
                { name : 'http-file', with:{types:options.types || defaultTypes}},
                { name : '404' }
            ]
        });
    }
    return application;
}

module.exports = microserve;
