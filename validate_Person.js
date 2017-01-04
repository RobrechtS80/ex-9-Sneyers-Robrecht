module.exports = {
    fieldsCorrect: function (object) {
        var errors=0;
        if (typeof object["personid"]==""||typeof object["personid"] !== "string"){
            errors=errors+1;
        };
        
         if (object["nrpurchases"]<0||typeof object["nrpurchases"] !== "number"){
            errors=errors+1;
        };
        
         if (object["count"]<0||typeof object["count"] !== "number"){
            errors=errors+1;
        };
        
         if (typeof object["date"]==""||typeof object["date"] !== "string"){
            errors=errors+1;
        };
         if (object["ratio"]<0||typeof object["ratio"] !== "number"){
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