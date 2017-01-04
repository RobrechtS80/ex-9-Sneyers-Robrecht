module.exports = {
    fieldsCorrect: function (object) {
        var errors=0;
        if (typeof object["saleid"]==""||typeof object["saleid"] !== "string"){
            errors=errors+1;
            console.log('1');
        };
        
         if (typeof object["product"]== ""||typeof object["product"] !== "string"){
            errors=errors+1;
            console.log('2');
        };
        
         if (object["quantity"]<0||typeof object["quantity"] !== "number"){
            errors=errors+1;
            console.log('3');
        };
        
         if (object["total"]<0||typeof object["total"] !== "number"){
            errors=errors+1;
            console.log('4');
        };
         if (typeof object["date"]==""||typeof object["date"] !== "string"){
            errors=errors+1;
            console.log('5');
        };
         if (typeof object["locationid"]==""||typeof object["locationid"] !== "string"){
            errors=errors+1;
            console.log('6');
        };
        
        return errors;//eerste keer vergete lol
        
        
    }
  
};
/*his.saleid = saleid;
    this.product = product;
    this.quantity = quantity;
    this.total=total;
    this.date=date;
     this.locationid = locationid;
     */