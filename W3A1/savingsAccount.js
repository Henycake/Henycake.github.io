class SavingsAccount extends Account {
    constructor(number,interest){
        super(number);
        this.interst=interest;
    }
    getInterest(){
        return this._interest;
    }
    setInterest(value){
       if(value<0){
           alert("Interst should greater than 0");
           return;
       }
       this._interest=value;
    }
    addInterest(){
        let calculatedInterest = this._balance * this._interest / 100;
        this._balance += calculatedInterest;
        return calculatedInterest;
    }
    endOfMonth() {
        this.addInterest();
        return "Interest added " + this.toString();
    }

    toString() {
        return "SavingsAccount " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }
}