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
    
    insertBooks: function(book,callback){
        this.connect(null,function(db){
            db.collection('books').insert(book, function(err,result)
            {
                db.close();
                callback();
            });
        });
    }
    
};
        
module.exports=dal_Locations;