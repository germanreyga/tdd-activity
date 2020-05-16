class BankAccount {
  constructor(balance) {
    this.balance = balance;
    this.history = [];
  }

  current() {
    return this.balance;
  }

  append(value) {
    if (value < 0) {
      return this.balance;
    } else {
      let oldBalance = this.balance;
      this.balance = this.balance + value;
      let newBalance = this.balance;
      this.history.push({
        transaction: new Transaction("append", oldBalance, newBalance),
      });
      return newBalance;
    }
  }

  substract(value) {
    if (value < 0) {
      return this.balance;
    } else {
      let oldBalance = this.balance;
      this.balance = this.balance - value;
      let newBalance = this.balance;
      this.history.push({
        transaction: new Transaction("substract", oldBalance, newBalance),
      });
      return newBalance;
    }
  }

  getHistory() {
    return this.history;
  }

  merge(bankAccount) {
    // It first merges the transaction history
    bankAccount.history.map((transaction) => {
      this.history.push(transaction);
    });

    // Then it creates the new balance based on the original and the bankAccount being merged
    let bankAccBalance = bankAccount.current();

    if (bankAccBalance <= 0) {
      this.substract(Math.abs(bankAccBalance));
    } else {
      this.append(bankAccBalance);
    }

    return this.getHistory();
  }
}

class Transaction {
  constructor(type, oldBalance, newBalance) {
    this.type = type;
    this.oldBalance = oldBalance;
    this.newBalance = newBalance;
  }
}

module.exports = { BankAccount, Transaction };
