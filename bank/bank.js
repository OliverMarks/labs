class BankAccount {

static nextAccountNumber = 100000;

constructor(customerName, accountNumber = null, balance = 0.00) {
    this._customerName = customerName;
    
    if (accountNumber !== null) {
      this._accountNumber = accountNumber;
    } else {
      this._accountNumber = BankAccount.nextAccountNumber++;
    }
  
    this._balance = Number(balance.toFixed(2));
  }


  get customerName () {
    return this._customerName;
  }

  set customerName(name) {
    this._customerName = name;
  }

  get accountNumber() {
    return this._accountNumber;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    this.balance += amount;
    return this._balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      return this._balance;
    } else {
      throw new Error("Deposit amount must be positive.");
    }
  }

}