var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose")
var cors = require("cors")
var session = require('express-session')
const port = 5000;

mongoose.connect("mongodb://localhost/profile-app")
    .then(()=> {
        console.log("connected to mongo")
    })
    .catch((err)=> {
        console.log("not connected to mongod", err)
    })

var app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))


app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))
  

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'))

app.use('/users', require('./routes/users'));

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

module.exports = app;