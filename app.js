// import files and packages up here
var express = require('express');
var morgan = require('morgan');

var fs = require('fs');
var data = fs.readFileSync('data.json');
var info =  JSON.parse(data);

// create your express server below

var port = 5000;      //localhost port the program will be listening for
var app = express();    //create express application
app.use(morgan('dev'));


var server = app.listen(port, listening);

function listening()  {
  console.log('listening on Port ' + port + '.....');   //indicator that the program is listening and to which port
}

app.use(express.static('website'));


app.get('/data', function(req, resp) {
  resp.send(info);
  //console.log(info);
  //resp.end('port');
});

app.get('/feet', function (req, resp) {
  resp.sendFile(path.join(__dirname + '/index.html'));
})


// add your routes and middleware below


// finally export the express application
module.exports = app;



