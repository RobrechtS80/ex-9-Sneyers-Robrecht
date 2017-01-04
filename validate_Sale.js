
module.exports = {
    
    fieldsCorrect: function (object) {
        var errors=0;
        var naamerror="";
        if (typeof object["saleid"]==""||typeof object["saleid"] !== "string"){
            errors=errors+1;
           // console.log('1');
            naamerror= "check saleid wrong type or empty";
            
        };
        
         if (typeof object["product"]== ""||typeof object["product"] !== "string"){
            errors=errors+1;
           // console.log('2');
             naamerror= naamerror + " " + "product wrong type or empty";
        };
       
         if (object["quantity"]<0||typeof object["quantity"] !== "number"){
            errors=errors+1;
           // console.log('3');
             naamerror= naamerror + " " + "quantity wrong type or empty";
        };
        
         if (object["total"]<0||typeof object["total"] !== "number"){
            errors=errors+1;
            //console.log('4');
             naamerror= naamerror + " " + "total wrong type or empty";
        };
         if (typeof object["date"]==""||typeof object["date"] !== "string"){
            errors=errors+1;
           // console.log('5');
             naamerror= naamerror + " " + "date wrong type or empty";
        };
         if (typeof object["locationid"]==""||typeof object["locationid"] !== "string"){
            errors=errors+1;
           // console.log('6');
             naamerror= naamerror + " " + "locationid wrong type or empty";
             console.log(naamerror);
        };
        
        return errors;//eerste keer vergete lol
        
        console.log(naamerror);
        
    }
 
};
/*his.saleid = saleid;
    this.product = product;
    this.quantity = quantity;
    this.total=total;
    this.date=date;
     this.locationid = locationid;
     */