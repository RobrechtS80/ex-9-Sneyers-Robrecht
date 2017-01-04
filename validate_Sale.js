module.exports = {
    fieldsCorrect: function (object) {
        var errors=0;
        if (object["saleid"]<=0||typeof object["saleeid"] !== "string"){
            errors=errors+1;
        };
        
         if (object["product"]== ""||typeof object["product"] !== "string"){
            errors=errors+1;
        };
        
         if (object["quantity"]<0||typeof object["quantity"] !== "number"){
            errors=errors+1;
        };
        
         if (object["total"]<0||typeof object["total"] !== "number"){
            errors=errors+1;
        };
         if (object["date"]==""||typeof object["date"] !== "string"){
            errors=errors+1;
        };
         if (object["locationid"]==""||typeof object["locationid"] !== "string"){
            errors=errors+1;
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