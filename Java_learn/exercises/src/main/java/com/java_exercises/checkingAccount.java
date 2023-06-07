package com.java_exercises;

public class checkingAccount extends BankAccount {

    private double transactionFee;

    public checkingAccount(String accountNumber, double balance, double transactionFee){
        super(accountNumber, balance);
        this.transactionFee = transactionFee;
    }
    
    @override
    public double deposit(double amount){return 0.0; };

    @override
    public void withdraw(double amount){
        double currentBalance = getBalance();
        double newAmount = amount+transactionFee;
        if (currentBalance >= newAmount){
            currentBalance-=newAmount;
            setBalance(currentBalance);
        }
    }
    
}
