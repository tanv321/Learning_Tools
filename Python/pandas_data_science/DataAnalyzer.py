"""# Exercise 1:
- create a Python class called "DataAnalyzer" that represents a data analyzer. 
The class should have attributes for the data file path and the loaded data as a pandas DataFrame. 
Implement methods to load data from a CSV file, display the summary statistics of the data, 
and perform basic data manipulations such as filtering, sorting, and grouping."""

import pandas
class DataAnalyzer:
    def __init__(self, filePath):
        self.filePath = filePath
        self.load_data = pandas.read_csv(self.filePath)
        

    def return_data(self):
        return self.load_data
    
    def display_summary_statistics(self):
        return self.load_data.describe()

    #find a specified column within the dataFrame and return its content
    def filter_data_column(self, column_name):
        return self.load_data.loc[:,column_name]


    #find a specified row within the dataFrame and return its content
    def filter_data_row(self, row_name):
        return self.load_data.loc[row_name,:]
    
    #sort data via column name
    def sort_data_column(self, column_name):
        return self.load_data.sort_values(by=[column_name])
    
    def group_data(self):
        column = self.filter_data_column("Salary")
        return  "The total salary sum is: "+column.sum()
    

x = DataAnalyzer("./sample.csv")

print(x.return_data())

print(x.display_summary_statistics())

print(x.filter_data_column("Name"))

print(x.filter_data_row(2))

print(x.sort_data_column("Salary"))

print(x.group_data())

