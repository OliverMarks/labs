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
    this._balance += amount;
    return this._balance;
  }

  deposit(amount) {
    if (amount <= 0) {
        throw new Error('cannot deposit negative');
    }
    this.balance = this._balance + amount; 
    return this._balance; 
  }

  withdraw(amount) {
    if (amount <= 0) {
        throw new Error('cannot withdraw negative');
    }
    if (amount > this._balance) {
        throw new Error('insufficient funds'); 
    }
    this.balance = this._balance - amount; 
    return this._balance; 
   }
   
  }



