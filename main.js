/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var dal = require("./storage.js");
var dal_Locations= require("./Locations.js");
var express = require('express');
var parser = require('body-parser');

var app = express();
app.use(parser.json());

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
//err bevat de gegevens die ik nodig heb, kan dit zijn omdat capacity NULL is ? --> neen
app.get("/locations/:city", function (request, response) {
    dal_Locations.findLocation(request.params.city, function (result) {  //params niet body natuurlijk
     /* if (err) {
            console.log(err);
        }*/
        response.send(result);
    });
//(deze heb ik zelf een keer aangemaakt) http://localhost:4324/locations/Geel http://localhost:4324/locations/Mechelen
});

var Location = function (locationid, name, city, capacity) {
    this.locationid = locationid;
    this.name = name;
    this.city = city;
    this.capacity = capacity;
};
    
app.post('/locations',function(request, response){
    var Locatie= new Location(request.body.locationid,request.body.name,request.body.city,request.body.capacity);
    
    dal_Locations.insertLocations(Locatie, function(){
       response.status(201).send();   
    });
  
});

console.log('hello world');

app.listen(4324);


