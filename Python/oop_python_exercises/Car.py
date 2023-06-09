"""create a Python class called "Car" that represents a car. T
he class should have attributes for the car's make, model, and year.
 Implement methods to start the car, stop the car, and display the car's information. 
 Enhance the class to include advanced automotive features, such as implementing an automatic transmission system, 
 simulating realistic acceleration and braking, and calculating fuel consumption based on driving conditions."""

import random
from time import sleep
import threading

class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.isRunning = False
    
    def startCar(self) -> str:
        self.isRunning = True
        while self.isRunning: 
            print("Current speed of your car "+ self.model + " is at " + str(random.randint(10,100)) + "MPH")
            sleep(3)
    
    def stopCar(self) -> str:
        self.isRunning = False
        return "car stopped now at 0 MPH"


    

car = Car("honda", "pilot", "2023")

car_thread = threading.Thread(target=car.startCar)
print(car_thread.start())
sleep(10)
print(car.stopCar())
