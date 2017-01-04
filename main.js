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

var Book = function(id,name){
    this._id=id;
    this.id=id;
    this.name=name;
    
};
var counter=3;
 var books=[new Book(1,'kanker'), new Book(2,'potter')];
 
app.get('/locations',function(request,response){
   dal_Locations.listLocations(function(err,result){
       
        response.send(result);
   });
   
});

app.get("/Locations/:city", function (request, response) {
    dal_Locations.findLocation(request.params.stad, function (result) {
      
        response.send(result);
    });
//key:city   Value:Mechelen (deze heb ik zelf een keer aangemaakt)
});
var Location = function (locationid, name, city, capacity) {
    this.locationid = locationid;
    this.name = name;
    this.city = city;
    this.capacity = capacity;
};
    
app.post('/locations',function(request, response){
    var Locatie= new Location(request.body.locationid,request.body.name,request.body.city,request.body.capaciity);
    
    dal_Locations.insertLocations(Locatie, function(){
       response.status(201).send();   
    });
  
});

console.log('hello world');

app.listen(4324);


