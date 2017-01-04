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

var dal_Persons={
    connect: function (err, result) {
		MongoClient.connect(url, function (error, db) {
			if (error)
				throw new Error(error);
			console.log("Connected successfully to server");
			result(db);
		});
	},
        
       listPersons: function(callback){
           this.connect(null,function(db){
               db.collection('persons').find({}).toArray(function(err,result){
                   db.close();
                   callback(result);
               });
           });
           
       },
    
    findPerson: function(id,callback){
           this.connect(null,function(db){
               db.collection('persons').find({personid:id}).toArray(function(err,result){
                   db.close();
                   callback(result);
               });
           });
           
       },
       //collection.findAndModify    https://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
      updatePersons: function(id,callback){
        this.connect(null,function(db){
            db.collection('persons').findAndModify({personid:id},[],{$set: {"personid": id}},{new: true},
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
    
    
       
    insertPersons: function(Persoon,callback){
        this.connect(null,function(db){
            db.collection('persons').insert(Persoon, function(err,result)
            {
                db.close();
                callback();
            });
        });
    }
    
};
        
module.exports=dal_Persons;