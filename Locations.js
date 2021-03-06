var MongoClient = require('mongodb').MongoClient;

//var url='mongodb://localhost:27017/booksdb';
var url='mongodb://localhost:27017/Apidb';
/*MongoClient.connect(url,function(error, db){
    if(error)
        throw new Error(error);
    console.log("Connected succesfully to server");
    db.close();
    });
*/

var dal_Locations={
    connect: function (err, result) {
		MongoClient.connect(url, function (error, db) {
			if (error)
				throw new Error(error);
			console.log("Connected successfully to server");
			result(db);
		});
	},
        
       listLocations: function(callback){
           this.connect(null,function(db){
               db.collection('locations').find({}).toArray(function(err,result){
                   db.close();
                   callback(result);
               });
           });
           
       },
    
    findLocation: function(city,callback){
           this.connect(null,function(db){
               db.collection('locations').find({city:city}).toArray(function(err,result){
                   db.close();
                   callback(result);
               });
           });
           
       },
       //collection.findAndModify    https://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
      updateLocations: function(id,callback){
        this.connect(null,function(db){
            db.collection('locations').findAndModify({locationid:id},[],{$set: {locationid: id}},{returnOriginal: false},
            function(err, result) {
                if(err) {
     console.log(err.message);
   } else {
     db.close();
     console.log(result);
          //callback(result);
   }});
        });
    },
    
    
       
    insertLocations: function(Locatie,callback){
        this.connect(null,function(db){
            db.collection('locations').insert(Locatie, function(err,result)
            {
                db.close();
                callback();
            });
        });
    }
    
};
        
module.exports=dal_Locations;