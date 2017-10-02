var express = require('express');
var app= express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require("path");


//connect to mongoose
/*mongoose.connect('mongodb://localhost/garage');
var db = mongoose.connection; 
*/

//Mock data
var owned = '{"bikes":[';
    owned = owned + ' { "Id":1,"Make": "Yamaha", "Type":"R1", "Year":2015}';
    owned = owned + ',{ "Id":2,"Make": "Honda", "Type":"CBR", "Year":2012}';
    owned = owned + ',{ "Id":3,"Make": "Suzuki", "Type":"GSXR", "Year":2008}';
    owned = owned + '';
    owned = owned + ']}'

//APIs
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname +'/app.html'));
});

app.get('/api/owned',function(rec, res){
    res.setHeader('Content-Type', 'application/json');
    res.json(owned);
});

app.get('/api/owned/:_id',function(rec, res){
    var id = rec.params._id;
    if(id)
    {
        //res.write(id);
        var jData = JSON.parse(owned);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jData));
        //res.end();
    }
    else
    {
        //res.json(owned);
    }
});

app.listen(3000);
console.log('Runing Grage port 3000');