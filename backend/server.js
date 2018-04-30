// Required Modules

var dotenv     = require('dotenv').load();
var express    = require("express");
var morgan     = require("morgan");
var bodyParser = require("body-parser");
var jwt        = require("jsonwebtoken");
var nedb       = require("nedb");
var connect    = require("camo").connect;
var Document   = require('camo').Document;
var app        = express();

var port = Number(process.env.PORT || 3001);
var database;
var uri = "nedb://" + process.env.DB;
connect(uri).then(function(db) {
  database = db;
});
var User     = require('./models/User').User;
var Task     = require('./models/Task').Task;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

// Define the home page route.
app.get('/', function(req, res) {
  res.send('Our first route is working.:)');
});

app.get('/tasks', function(req, res) {
  /* Stub out this call until I can get the DB functionality working */
      res.json({"tasks":
        [ "task1",
          "task2",
          "task3",
        ]
      });
	});

process.on('uncaughtException', function(err) {
    console.log(err);
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});
