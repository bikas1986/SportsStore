# SportsStore
My first AngularJS app

I have used MongoDB as NoSQL database.



> show dbs
SportsStore  0.078GB
Test         0.078GB
admin        (empty)
local        0.078GB
> use SportsStore
switched to db SportsStore
> show collections
products
system.indexes


> db.products.find().pretty()
var products = [{
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
}];

db.products.insert(products);
