const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var main = require('./routes/main');
// var tasks = require('./routes/tasks');

var app = express();

//security
// app.disable('x-powered-by');
// var helmet = require('helmet');
// app.use(helmet());

//passport
// passport.init(app);

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set static Folder for angular 2
app.use(express.static(path.join(__dirname, 'client/dist')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', main);
// app.use('/api', passport.authenticate, tasks);

var port = 3000;
app.listen(port, function(){
	console.log('Server started on port ' + port);
});