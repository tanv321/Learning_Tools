"""
- Create a Python class called "Employee" that represents an employee. 
The class should have attributes for the employee's name, ID, and salary. 
Implement methods to give a raise to the employee, display the employee's information,
and calculate the net salary after deducting taxes.

"""
class Employee:
    def __init__(self, name, id, salary):
        self.name = name
        self.id = id
        self.salary = salary
    

    def raise_employee(self, amount):
        self.salary+=amount
        return self.salary

    def info_employee(self):
        return [self.id, self.name, self.salary]


    def deduct_taxes_employee(self):
        return self.salary-(self.salary*0.08)

x = Employee("johnny", 200, 70000)

print(x.raise_employee(1000))
print(x.info_employee())
print(x.deduct_taxes_employee())