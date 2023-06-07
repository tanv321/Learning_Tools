package com.java_exercises;

public class SavingAccount extends BankAccount implements BankAccount.InterestBearing {
    
    private double interestRate;

    public SavingAccount(String accountNumber, double balance, double interestRate){
        super(accountNumber, balance);
        this.interestRate = interestRate;

    }

    @override 
    public double deposit(double amount){
        double currentBalance = getBalance();
        currentBalance += amount;
        setBalance(currentBalance);
        return getBalance();
    }
    

    @override
    public void withdraw(double amount){
        double currentBalance = getBalance();
        if (currentBalance >= amount){
            currentBalance-=amount;
            setBalance(currentBalance);
            
        }
    }






    @Override
    public void calculateInterest() {
        // Implement interest calculation logic for savings account
        // You can modify this as per your requirements
        double bal = getBalance();
        double interest = bal * interestRate;
        bal += interest;
        System.out.println("Interest calculated: $" + interest);
    }
    
}
