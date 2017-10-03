var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require("path");
var mongodb = require('mongodb');


//connect to mongoose
/*mongoose.connect('mongodb://localhost/garage');
var db = mongoose.connection; 
*/

//Mock data
/*
var owned = '{"bikes":[';
    owned = owned + ' { "Id":1,"Make": "Yamaha", "Type":"R1", "Year":2015}';
    owned = owned + ',{ "Id":2,"Make": "Honda", "Type":"CBR", "Year":2012}';
    owned = owned + ',{ "Id":3,"Make": "Suzuki", "Type":"GSXR", "Year":2008}';
    owned = owned + '';
    owned = owned + ']}'
 */

//APIs
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app.html'));
});

app.get('/api/owned', function(rec, res) {
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/garage';
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log('Unable to connect', err);
        } else {
            var collection = db.collection('owned');
            collection.find({}).toArray(function(err, result) {
                if (err) {
                    res.send(err);
                } else if (result.length) {

                    res.json(result);
                } else {
                    res.send('You do not have anything in your garage!!');
                }
                db.close();
            });
        }
    });
});

app.get('/api/owned/:_id', function(rec, res) {
    var vid = rec.params._id;
    if (vid) {
        var MongoClient = mongodb.MongoClient;
        var url = 'mongodb://localhost:27017/garage';
        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect', err);
            } else {
                var collection = db.collection('owned');
                collection.find({"Id": vid}).toArray(function(err, result) {
                    if (err) {
                        res.send(err);
                    } else if (result.length) {

                        res.json(result);
                    } else {
                        res.send('You do not have anything in your garage with an Id of (' + vid + ')');
                    }
                    db.close();
                });
            }
        });
    } else {
        res.send('You do not have this item in your garage!!');
    }
});

app.listen(3000);
console.log('Runing Grage port 3000');