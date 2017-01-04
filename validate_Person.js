module.exports = {
    fieldsCorrect: function (object) {
        var errors=0;
        if (object["personid"]<=0||typeof object["saleeid"] !== "string"){
            errors=errors+1;
        };
        
         if (object["nrpurchases"]== ""||typeof object["nrpurchases"] !== "number"){
            errors=errors+1;
        };
        
         if (object["count"]<0||typeof object["quantity"] !== "number"){
            errors=errors+1;
        };
        
         if (object["date"]==""||typeof object["date"] !== "string"){
            errors=errors+1;
        };
         if (object["ratio"]==""||typeof object["ratio"] !== "number"){
            errors=errors+1;
        };
        
        return errors;//eerste keer vergete lol
        
        
    }
  
};
/*
 *  this.personid = personid;
    this.nrpurchases = nrpurchases;
    this.count = count;
    this.date=date;
     this.ratio = ratio;
 */