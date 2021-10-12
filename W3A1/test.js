
describe("Account", function() {

    const account = new Account(Bank.nextNumber);

    it("throw an error when trying to deposit a negative value", function() {
        assert.throw(() => account.deposit(-100), RangeError, "Deposit amount has to be greater than zero");
    });

    it("deposit and get the deposited amount in the balance", function() {
        account.deposit(100);
        assert.equal(100, account.getBalance());
    });

    it("throw an error when trying to withdraw a negative value", function() {
        assert.throw(() => account.withdraw(-100), RangeError, "Withdraw amount has to be greater than zero");
    });

    it("throw an error when trying to withdraw a value greater than the balance", function() {
        assert.throw(() => account.withdraw(200), Error, "Insufficient funds");
    });

    it("returns the account in the correct string for printing", function() {
        assert.equal("Account 0: balance 100", account.toString());
    });

});

describe("Savings Account", function() {

    let savingsaccount = new Savingsaccount(Bank.nextNumber, 0);

    it("set and get interest rate for a savings account", function() {
        savingsaccount.setInterest(2.5);
        assert.equal(2.5, savingsaccount.getInterest());
    });

    it("add interest for a savings account", function() {
        savingsaccount.deposit(100);
        assert.equal(2.5, savingsaccount.addInterest());
    });

    it("returns the account in the correct string for printing", function() {
        assert.equal("SavingsAccount 0: balance 102.5: interest 2.5", savingsaccount.toString());
    });

    it("adds interest at end of the month", function() {
        assert.equal("Interest added SavingsAccount 0: balance 105.0625: interest 2.5", savingsAccount.endOfMonth());
    });

});

describe("Checking Account", function() {

    let checkingaccount = new Checkingaccount(Bank.nextNumber, 0);

    it("set and get overdraft for a checking account", function() {
        checkingaccount.setOverdraft(500);
        assert.equal(500, checkingaccount.getOverdraft());
    });

    it("throw an error when trying to withdraw a value greater than the over draft limit", function() {
        assert.throw(() => checkingaccount.withdraw(600), Error, "Insufficient funds");
    });

    it("shows warning for negetive balance at end of the month", function() {
        checkingaccount.withdraw(100);
        assert.equal("Warning, low balance CheckingAccount 0: balance -100: overdraft limit 500", checkingAccount.endOfMonth());
    });

});


describe("Bank", function() {

    const bank = new Bank();
    const account = new Account(Bank.nextNumber);
    bank.addAccount(account);

    it("check account number for a new account", function() {
        const accountNumber = bank.addAccount(account);
        assert.equal(1, accountNumber);
    });

});