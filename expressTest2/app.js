
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
//app.get('/photos', routes.photos);
//app.post('/photos', routes.photos);
app.get('/users', user.list);

/*
*/
app.post('/photos', function(req, res, next){
	//console.log(req.files);
	//res.json(req.files);
	var submitted = req.files.photo;
	var tmpPath = submitted.path;
	var uploadDir = './public/uploads/' + submitted.name;
	fs.rename(tmpPath, uploadDir, function(err){
		if(err){ next(err); }
		fs.unlink(tmpPath, function(){
			console.log('Image uploaded to ' + uploadDir);
		});
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
