class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log("Account Number:", this.accountNumber);
        console.log("Owner Name:", this.ownerName);
        console.log("Balance: $" + this.balance);
    }
}

// Creating instances and demonstrating functionality
const account1 = new BankAccount(1001, "John Doe", 1000);
const account2 = new BankAccount(1002, "Jane Smith", 2000);

console.log("Initial Account Information:");
account1.displayAccountInfo();
account2.displayAccountInfo();

console.log("\nDepositing $500 to account1...");
account1.deposit(500);
console.log("New Account Information for account1:");
account1.displayAccountInfo();

console.log("\nWithdrawing $1500 from account2...");
account2.withdraw(1500);
console.log("New Account Information for account2:");
account2.displayAccountInfo();
