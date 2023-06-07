package com.java_exercises;

/*
 * Exercise: Bank Account Transactions

Implement a Java program that simulates bank account transactions. 
The program should have multiple threads representing bank customers performing deposits and withdrawals on a shared bank account.

Requirements:

Create a BankAccountThreads class that represents a bank account. It should have methods for depositing and withdrawing funds.

Implement a BankTransaction class that extends Thread. Each BankTransaction thread represents a bank customer. The thread should randomly perform deposits and withdrawals on the shared bank account.

Use synchronization constructs such as synchronized or Semaphore to ensure thread safety and prevent concurrent access to the shared bank account.

The program should create multiple BankTransaction threads and start them concurrently.

Simulate realistic deposit and withdrawal operations with random amounts and intervals between transactions.

Print log messages indicating the details of each transaction, including the thread name, transaction type (deposit/withdrawal), amount, and the resulting account balance.

Your task is to implement the necessary synchronization mechanisms using either synchronized or Semaphore to ensure that the bank account transactions are performed correctly without any concurrency issues.
 */


 public class SimpleBankAccount{

    

 }