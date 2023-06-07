package com.java_exercises;


public class MainBankAccount {

    public static void main(String[] args) {
        // Create a SavingsAccount object
        SavingsAccount savingsAccount = new SavingsAccount("1234567890", 1000.0, 0.05);

        // Perform operations on the savings account
        savingsAccount.displayAccountInfo();
        savingsAccount.deposit(10.0);
        savingsAccount.displayAccountInfo();
        savingsAccount.withdraw(5.0);
        savingsAccount.displayAccountInfo();
        savingsAccount.calculateInterest();
        savingsAccount.displayAccountInfo();
        
        CheckingAccount checkingAccount = new CheckingAccount("1234567890",500.0, 10);

        checkingAccount.displayAccountInfo();
        checkingAccount.withdraw(100);
        checkingAccount.displayAccountInfo();


    }



    
}
