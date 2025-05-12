class CurrentAccount extends BankAccount {
  constructor(customerName, accountNumber, balance = 0.00, overdraftLimit = 0.00) {
    super(customerName, accountNumber, balance);
    this._overdraftLimit = parseFloat(overdraftLimit.toFixed(2));
  }

  get overdraftLimit() {
    return this._overdraftLimit;
  }

  set overdraftLimit(newLimit) {
    this._overdraftLimit = parseFloat(newLimit.toFixed(2));
  }

  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      console.error('Withdrawal amount must be a positive number.');
      return;
    }
    if (this.balance - amount < -this._overdraftLimit) {
      console.error(
        `Withdrawal exceeds overdraft limit of £${this._overdraftLimit.toFixed(
          2
        )}.`
      );
      return;
    }
    this._balance -= parseFloat(amount.toFixed(2));
  }
}