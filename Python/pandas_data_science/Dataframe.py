# Import pandas library
import pandas as pd
  
# initialize list of lists
data = [['John Smith', 25, "Male", "New York"], ['Jane Doe', 30, "Female", "San Diego"], ['Bob Brown', 40, "Male", "Chicago"], ["Sarah Lee", 35, "Female", "Los Angeles"]]
  
# Create the pandas DataFrame
df = pd.DataFrame(data, columns=['Name', 'Age', "Gender", "City"])
# Printing Empty DataFrame
print(df.iloc[:2])

print(df.columns)

print(df.iloc[2])


average = df['Age'].sum()//df['Age'].count()

print(average)

data.append(["Alex Johnson", 27, "Male", "Philadelphia"])

df = pd.DataFrame(data, columns=['Name', 'Age', "Gender", "City"])

print(df, "woah")

df = df.drop(index = 4)
print(df)


df.to_csv("people.csv")