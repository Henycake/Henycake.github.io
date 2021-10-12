class checkingAccount extends Account{
    constructor(number,overdraft){
        super(number);
        this.overderaft=overdraft;
    }
    get overdraft(){
        return this._overdraft;
    }
    set overdraft(overderaft){
        this._overdraft=overderaft;
    }
    withdraw(amount) {
     
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString(){
          return "Checking Account " + this._number + ": balance " + this._balance +": overdraft Limit "+ this._overdraft;
    }

    }
