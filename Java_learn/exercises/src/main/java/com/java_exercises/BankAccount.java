package com.java_exercises;

/*Exercise: 

Implement a banking application that models different types of bank accounts. 
Each account should be able to perform basic operations such as deposit, withdraw, and display account information. 
Additionally, certain types of accounts should provide specialized functionality.

Start by creating an abstract class BankAccount that encapsulates the common properties and methods for all bank accounts.

The class should have the following:
Instance variables: accountNumber (String) and balance (double).
Abstract methods: deposit(double amount), withdraw(double amount).
Implement the BankAccount class to provide basic functionality for account information display.
Create an interface called InterestBearing that declares the abstract method calculateInterest().
This interface will be implemented by specific types of accounts that earn interest.

Create a concrete class called SavingsAccount that extends BankAccount and implements the InterestBearing interface.
This class should have an additional instance variable interestRate (double) 
and an implementation of the calculateInterest() method specific to savings accounts.

Create a concrete class called CheckingAccount that extends BankAccount. 
This class should have an additional instance variable transactionFee (double) 
and an implementation of the withdraw() method that deducts the transaction fee from the balance.

In the main program, 
you can demonstrate polymorphism by creating a list of BankAccount objects and storing instances of both SavingsAccount and CheckingAccount in the same list. 
You can then iterate over the list and invoke common methods, such as deposit(), withdraw(), and displayAccountInfo(), on each account without knowing the specific account type. */
abstract class BankAccount {
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public abstract double deposit(double amount);
    public abstract void withdraw(double amount);
    public void displayAccountInfo(){
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Balance: $" + balance);
    };


    public String getAccountNumber(){
        return accountNumber;
    }
    public void setAccountNumber(String value){
        accountNumber = value;
    }

    public double getBalance(){
        return balance;
    }
    
    public double setBalance(double amount){
        balance = amount;
        return balance;
    }

    public interface InterestBearing {
        void calculateInterest();
    }
    
}



