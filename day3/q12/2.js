function createBankAccount() {
    let balance = 0;
    let transactionHistory = [];
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                transactionHistory.push(`Deposited: ${amount}`);
                console.log(`Deposited: ${amount}`);
            } else {
                console.log("Deposit amount must be positive");
            }
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
                transactionHistory.push(`Failed withdrawal: ${amount}`);
            } else {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            }
        },
        checkBalance: function() {
            console.log(`Current balance: ${balance}`);
        },
        getTransactionHistory: function() {
            console.log("Transaction History:", transactionHistory);
        }
    };
}
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
account.checkBalance();
console.log(account.balance);
account.getTransactionHistory();