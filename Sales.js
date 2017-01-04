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

var dal_Sales={
    connect: function (err, result) {
		MongoClient.connect(url, function (error, db) {
			if (error)
				throw new Error(error);
			console.log("Connected successfully to server");
			result(db);
		});
	},
        
       listSales: function(callback){
           this.connect(null,function(db){
               db.collection('sales').find({}).toArray(function(err,result){
                   db.close();
                   callback(result);
               });
           });
           
       },
    
    findSale: function(id,callback){
           this.connect(null,function(db){
               db.collection('sales').find({saleid:id}).toArray(function(err,result){
                   db.close();
                   callback(result);
               });
           });
           
       },
       //collection.findAndModify    https://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
      updateSales: function(id,callback){
        this.connect(null,function(db){
            db.collection('sales').findAndModify({saleid:id},[],{$set: {"saleid": id}},{new: true},
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
    
    
       
    insertSales: function(Verkoop,callback){
        this.connect(null,function(db){
            db.collection('sales').insert(Verkoop, function(err,result)
            {
                db.close();
                callback();
            });
        });
    }
    
};
        
module.exports=dal_Sales;
