package com.java_exercises;


public class MainBankAccount {

    public static void main(String[] args) {
        // Create a SavingsAccount object
        SavingAccount savingsAccount = new SavingAccount("1234567890", 1000.0, 0.05);

        // Perform operations on the savings account
        savingsAccount.displayAccountInfo();
        savingsAccount.deposit(10.0);
        savingsAccount.displayAccountInfo();
        savingsAccount.withdraw(5.0);
        savingsAccount.displayAccountInfo();
        savingsAccount.calculateInterest();
        savingsAccount.displayAccountInfo();
        
        checkingAccount checkingAccount = new checkingAccount("1234567890",500.0, 10);

        checkingAccount.displayAccountInfo();
        checkingAccount.withdraw(100);
        checkingAccount.displayAccountInfo();


    }



    
}
