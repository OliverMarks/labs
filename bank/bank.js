class BankAccount {

static nextAccountNumber = 100000;

constructor(customerName, accountNumber = null, balance = 0.00) {
    this._customerName = customerName;
    
    if (accountNumber !== null) {
      this.accountNumber = accountNumber;
    } else {
      this.accountNumber = BankAccount.nextAccountNumber++;
    }
  
    this.balance = Number(balance.toFixed(2));
  }




}