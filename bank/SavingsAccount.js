class SavingsAccount extends BankAccount {
    constructor(customerName, accountNumber = null, balance = 0.00, interestRate = 0.00) {
      super(customerName, accountNumber, balance);
      this._interestRate = interestRate;
    }
  
    get interestRate() {
      return this._interestRate;
    }
    set interestRate(rate) {
      this._interestRate = rate;
    }
  
    addInterest() {
      const interest = this._balance * this._interestRate;
      this.balance = this._balance + interest;
      return this._balance;
    }
  }