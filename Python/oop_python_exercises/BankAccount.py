"""Exercise 1:
Create a Python class called "BankAccount" that represents a bank account. 
The class should have attributes for the account number, account holder name, and balance. 
Implement methods to deposit money, withdraw money, and check the account balance. to make it a bit challanging allow 
for the bankaccount to hold multiple accounts.
"""
class BankAccount:
    def __init__(self, account_name, account_number, account_balance):
        self.Bank_info = [{"account_name":account_name, "account_number":account_number, "account_balance":account_balance}]
    

    def add_another_account(self, account_name, account_number, account_balance):
        self.Bank_info.append({"account_name":account_name, "account_number":account_number, "account_balance":account_balance})

    def deposit(self, account_number, amount):
        for i in self.Bank_info:
            if i["account_number"] == account_number:
                i["account_balance"]+=amount
                return i
            
    def withdraw(self, account_number, amount):
        for i in self.Bank_info:
            if i["account_number"] == account_number:
                if i["account_balance"] >= amount:
                    i["account_balance"]-=amount
                    return "Your remaining balance is ", i["account_balance"]
                else:
                    return "Not enough fund"
            
    def account_balance(self):
        print(self.Bank_info)

    
        

bank_accounts = []

x = BankAccount("John", 100,  1000)
x.add_another_account("Mary", 200, 1000)
x.add_another_account("rinvert", 300, 1000)


print(x.account_balance())

print(x.deposit(300, 500))

print(x.account_balance())

print(x.withdraw(200, 500))

print(x.account_balance())




