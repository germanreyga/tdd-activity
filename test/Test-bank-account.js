const assert = require("assert");
const { BankAccount, Transaction } = require("../app/BankAccount");

describe("BankAcc", () => {
  describe("#current", () => {
    it("It should return the current balance in the account", () => {
      let balance = 30000.5;
      let acc = new BankAccount(balance);
      assert.deepEqual(balance, acc.current());
    });
  });

  describe("#append-pos", () => {
    it("It should append a positive value to the account balance", () => {
      let initialBalance = 500;
      let acc = new BankAccount(initialBalance);
      let valueToAppend = 200;
      let expectedNewBalance = 700;
      assert.deepEqual(expectedNewBalance, acc.append(valueToAppend));
    });
  });

  describe("#append-neg", () => {
    it("It shouldn't append a negative value to the account balance", () => {
      let unmodifiedBalance = 500;
      let acc = new BankAccount(unmodifiedBalance);
      let valueToAppend = -200;
      assert.deepEqual(unmodifiedBalance, acc.append(valueToAppend));
    });
  });

  describe("#substract-pos", () => {
    it("It should substract a positive value to the account balance", () => {
      let initialBalance = 500;
      let acc = new BankAccount(initialBalance);
      let valueToAppend = 600;
      let expectedNewBalance = -100;
      assert.deepEqual(expectedNewBalance, acc.substract(valueToAppend));
    });
  });

  describe("#substract-neg", () => {
    it("It shouldn't substract a negative value to the account balance", () => {
      let unmodifiedBalance = 500;
      let acc = new BankAccount(unmodifiedBalance);
      let valueToAppend = -200;
      assert.deepEqual(unmodifiedBalance, acc.substract(valueToAppend));
    });
  });

  describe("#history", () => {
    it("It should show a history of full transactions correctly", () => {
      let expectedTransactions = [
        { transaction: new Transaction("append", 10, 20) },
        { transaction: new Transaction("substract", 20, 10) },
      ];

      let acc = new BankAccount(10);
      acc.append(10);
      acc.substract(10);

      assert.deepEqual(expectedTransactions, acc.getHistory());
    });
  });

  describe("#merge", () => {
    it("It should merge 2 bank accounts correctly (balancewise and history-wise)", async () => {
      let originalAcc = new BankAccount(100);
      originalAcc.append(50);

      let otherAcc = new BankAccount(200);
      otherAcc.substract(100);

      let expectedMergedHistory = [
        { transaction: new Transaction("append", 100, 150) }, // Original acc transaction
        { transaction: new Transaction("substract", 200, 100) }, // Other acc transaction
        { transaction: new Transaction("append", 150, 250) }, // Transaction that happens when merging both accounts
      ];

      assert.deepEqual(expectedMergedHistory, originalAcc.merge(otherAcc));
    });
  });
});
