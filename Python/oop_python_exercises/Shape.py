"""# Exercise 4:
- create a Python class called "Shape" that represents a generic shape.
 Create subclasses for specific shapes such as "Circle", "Triangle", and "Rectangle". 
 Implement methods to calculate the area and perimeter of each shape. 
 Extend the class to include advanced geometry operations, such as finding the intersection of two shapes, 
 calculating the distance between shapes, and determining if a point is inside a shape."""

class Shape:
    def __init__(self, shape):
        self.shape = shape


    def get_shape(self):
        return self.shape

    def calculate_area(self):
        raise NotImplementedError("Subclasses must implement calculate_area() method.")
    
    def calculate_parameter(self):
        raise NotImplementedError("Subclasses must implement calculate_area() method.")
    

#since subclass and superclass not too lengthy we can do it in one file
class Circle(Shape):
    def __init__(self, shape, radius):
        super().__init__(shape)
        self.radius = radius
        self.pi = 3.14

    def calculate_area(self):
        return "Area of Circle : " + str((self.radius**2)*self.pi)
    
    def calculate_parameter(self):
        return "Peremeter of Circle: " + str(self.pi*2*self.radius) 
    

cir = Circle("circle", 10)

print(cir.calculate_area())
print(cir.calculate_parameter())
print(cir.get_shape())