

class Bank {


    constructor() {
        this._accounts = [];
    }
    static nextNumber = 0;

    addAccount() {
        let account = new Account(Bank.nextNumber);
        this._accounts.push(account);
        Bank.nextNumber++;
        return account.getNumber();
    }

    addSavingsaccount(interest) {
        let savingsaccount = new Account(Bank.nextNumber, interest);
        this._accounts.push(savingsaccount);
        Bank.nextNumber++;
        return savingsaccount.getNumber();
    }

    addCheckingaccount(overdraft) {
        let checkingaccount = new Account(Bank.nextNumber, overdraft);
        this._accounts.push(checkingaccount);
        Bank.nextNumber++;
        return checkingaccount.getNumber();
    }

    closeAccount(number) {
        this._accounts = this._accounts.filter(function(account) {
            return account.number !== number;
        });
    }

    endOfMonth() {
        let endOfMonthReport = "";
        this._accounts.forEach(account => {
            endOfMonthReport + account.endOfMonth();
        })
        return endOfMonthReport;
    }

    toString() {
        let accounts = "";
        this._accounts.forEach(account => {
            accounts += account + "\n";
        });
        return accounts;
    }

}