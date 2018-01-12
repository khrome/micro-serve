µserve
======
micro-serve is simple server wrapper for [whammo](https://www.npmjs.com/package/whammo) usage with no configuration

Command Line
------------
If you installed with `-g` you've got the app in your path. Serve the current directory on 8080 with

	userve -p 8080

for more information consult `userve --help`


Routing
-------

	var Server = require('micro-serve');

Routing with [director](https://www.npmjs.com/package/director) looks like:

	var app = Server({
		director : {
			'/test' : {get:function(){
                this.res.end('Got it!');
            }}
		}
	});


Whereas if you want to use the [express router](https://www.npmjs.com/package/router):

	var app = Server({
		express : {
			'/test' : {get:function(req, res){
				res.end('Got it!');
			}}
		}
	});

then regardless of what routes you use, you'll need attach to a port. `app` is a whammo instance.

	app.listen(8080);

If you find any rough edges, please submit a bug!

Enjoy,

-Abbey Hawk Sparrow
