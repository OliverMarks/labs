class BankAccount {

static nextAccountNumber = 100000;

constructor(customerName, accountNumber = null, balance = 0.00) {
    this.customerName = customerName;
    
    if (accountNumber !== null) {
      this.accountNumber = accountNumber;
    } else {
      this.accountNumber = BankAccount.nextAccountNumber++;
    }
  
    this.balance = Number(balance.toFixed(2));
  }


  get customerName () {
    return this.customerName;
  }

  set customerName(name) {
    this.customerName = name;
  }

  get accountNumber() {
    return this._accountNumber;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    this.balance = this.balance + amount;
    return this._balance;
  }



}