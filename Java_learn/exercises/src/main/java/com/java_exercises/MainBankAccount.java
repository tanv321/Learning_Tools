package com.java_exercises;


public class MainBankAccount {

    public static void main(String[] args) {
        // Create a SavingsAccount object
        SavingAccount savingsAccount = new SavingAccount("1234567890", 1000.0, 0.05);

        // Perform operations on the savings account
        savingsAccount.displayAccountInfo();
        savingsAccount.deposit(500.0);
        savingsAccount.withdraw(200.0);
        savingsAccount.calculateInterest();
        savingsAccount.displayAccountInfo();
    }



    
}
