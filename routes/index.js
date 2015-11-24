var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'SportsStore' });
});

/* Filter example */
router.get('/filter', function(req, res, next) {
    res.render('filter');
});

/*
var products = [
    {
        "name" : "Kayak",
        "description" : "A boat for one person",
        "category" : "Watersports",
        "price" : 275
    },
    {
        "name" : "Lifejacket",
        "description" : "Protective and fashionable",
        "category" : "Watersports",
        "price" : 48.95
    },
    {
        "name" : "Soccer Ball",
        "description" : "FIFA-approved size and weight",
        "category" : "Soccer",
        "price" : 19.5
    },
    {
        "name" : "Corner Flags",
        "description" : "Give your playing field a professional touch",
        "category" : "Soccer",
        "price" : 34.95
    },
    {
        "name" : "Stadium",
        "description" : "Flat-packed 35,000-seat stadium",
        "category" : "Soccer",
        "price" : 79500
    },
    {
        "name" : "Thinking Cap",
        "description" : "Improve your brain efficiency by 75%",
        "category" : "Chess",
        "price" : 16
    },
    {
        "name" : "Unsteady Chair",
        "description" : "Secretly give your opponent a disadvantage",
        "category" : "Chess",
        "price" : 29.95
    },
    {
        "name" : "Human Chess Board",
        "description" : "A fun game for the family",
        "category" : "Chess",
        "price" : 75
    },
    {
        "name" : "Bling-Bling King",
        "description" : "Gold-plated, diamond-studded King",
        "category" : "Chess",
        "price" : 75
    },
    {
        "name" : "Cork ball",
        "description" : "Cricket ball",
        "category" : "Cricket",
        "price" : 45
    }
];
*/
/*
router.get('/insert', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/Test';
    var insertDocument = function(db, callback){
        var collection = db.collection('products');
        collection.insert(products, function(err, result){
            console.log('Result length : '+result.length);
            callback(result);
        })
    };

    MongoClient.connect(url, function(error, db){
        if(error){
            console.log('Error occured while connecting to db :\n'+error);
        }
        insertDocument(db, function(){
            db.close();
        })
    });
});

*/
router.get('/products', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/SportsStore';



    var findDocuments = function(db, callback){
        var collection = db.collection('products');
        collection.find({}).toArray(function(err, data){
            console.log('Found the following data:: \n '+data);
            callback(data);
        })
    }


    MongoClient.connect(url, function(error, db){
        if(error){
            console.log('Error occured while connecting to db :\n'+error);
        }
        findDocuments(db, function(data){
            db.close();
            res.send(data);
        })
    });
});

module.exports = router;
