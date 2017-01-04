/* 

 * get and get by id or location done , validation sort of done
 * TO DO
 * errors, een update wss een put ? Idempotence
 */
//var dal = require("./storage.js");
var dal_Locations= require("./Locations.js");
var dal_Sales = require("./Sales.js");
var dal_Persons= require("./Persons.js")
var validateloc = require("./validate_Loc.js");
var validatesale= require("./validate_Sale.js")
var express = require('express');
var parser = require('body-parser');

var app = express();
app.use(parser.json());

//Locations
app.get('/',function(request,response){
    response.send("hello world");
    
});


 
app.get('/locations',function(request,response){
   dal_Locations.listLocations(function(result){
       /*if (err) {
            console.log(err);
        }*/
        response.send(result);
   });
   
});
//err bevat de gegevens die ik nodig heb, kan dit zijn omdat capacity NULL is ? --> neen wss iets te ;akn met de error bij de callback 
app.get("/locations/:city", function (request, response) {
    dal_Locations.findLocation(request.params.city, function (result) {  //params niet body natuurlijk
    if (result) {
        response.send(result);
    } else {
        response.status(404).send();
    }
    //nutteloss ik moet proberen te achterhalen hoe errors afgehandeld zordn in findLocation() 
        //response.send(result);
    });
//(deze heb ik zelf een keer aangemaakt) http://localhost:4324/locations/Geel http://localhost:4324/locations/Mechelen
});

var Location = function (locationid, name, city, capacity) {
    this.locationid = locationid;
    this.name = name;
    this.city = city;
    this.capacity = capacity;
};//nog toevoegen , gegevens van location gekeken bij wibren aangezien we dezelfde bussinesvragen hebben en we samen de resources hebben aangemaakt zoals orgineel van ons verwacht werd in de les toen we in groepjes zaten, later is dit veranderd ofzo.
    
app.post('/locations',function(request, response){
    var Locatie= new Location(request.body.locationid,request.body.name,request.body.city,request.body.capacity);
    
    var errors = validateloc.fieldsNotEmpty(Locatie, "locationid", "name", "city", "capacity");
    if (errors) {
        response.status(400).send({msg: "Following field(s) are mandatory:" + errors.concat()});
        return;
    }
    
    dal_Locations.insertLocations(Locatie, function(){
       response.status(201).send();   
    });
  
});

app.put('/locations',function(request, response){
    
var Locatie= new Location(request.body.locationid,request.body.name,request.body.city,request.body.capacity);
    
    var errors = validateloc.fieldsNotEmpty(Locatie, "locationid", "name", "city", "capacity");
    if (errors) {
        response.status(400).send({msg: "Following field(s) are mandatory:" + errors.concat()});
        return;
    }
    
    dal_Locations.updateLocations(request.params.locationid,Locatie, function(result){
       response.send(result);   
    });
  
});


//Sales
app.get('/sales',function(request,response){
   dal_Sales.listSales(function(result){
        response.send(result);
   });
   
});

app.get("/sales/:id", function (request, response) {//logischer op id dan op location
    dal_Sales.findSale(request.params.id, function (result) {  //params niet body natuurlijk
        response.send(result);
    });
//(deze heb ik zelf een keer aangemaakt) 
});

var Sale = function (saleid, product, quantity,total, date, locationid) {
  
    this.saleid = saleid;
    this.product = product;
    this.quantity = quantity;
    this.total=total;
    this.date=date;
     this.locationid = locationid;
};
    //{"saleid":"2","product":"smos","quantity":2,"total":4.20,"date":"12/12/12","locationid":1}
app.post('/sales',function(request, response){
    var Verkoop= new Sale(request.body.saleid,request.body.product,request.body.quantity,request.body.total,request.body.date,request.body.locationid);
    var errors = validatesale.fieldsCorrect(Verkoop, "saleid", "product", "quantity", "total","date","locationid");
    if (errors) {
        response.status(400).send({msg: "Following field(s) are mandatory:" + errors.concat()});
        return;
    }
   
    dal_Sales.insertSales(Verkoop, function(){
       response.status(201).send();   
    });
  
});

//Persons

app.get('/persons',function(request,response){
   dal_Persons.listPersons(function(result){
        response.send(result);
   });
   
});

app.get("/persons/:id", function (request, response) {//logischer op id dan op location
    dal_Persons.findPerson(request.params.id, function (result) {  //params niet body natuurlijk
        response.send(result);
    });
//(deze heb ik zelf een keer aangemaakt) 
});

var Person = function (personid, nrpurchases, count, date, ratio) {
  
    this.personid = personid;
    this.nrpurchases = nrpurchases;
    this.count = count;
    this.date=date;
     this.ratio = ratio;
};
    //{"personid":"1","nrpurchases":5,"count":60,"date":"12/12/12","ratio":0.34}
app.post('/persons',function(request, response){
    var Persoon= new Person(request.body.personid,request.body.nrpurchases,request.body.count,request.body.date,request.body.ratio);
   
    dal_Persons.insertPersons(Persoon, function(){
       response.status(201).send();   
    });
  
});
console.log('hello world');

app.listen(4324);


