class Animal:
    def __init__(self, name : str, age : int, weight : float):
        self.name = name
        self.age = age
        self.weight = weight
        
    def speak(self) -> str:
        return self.name + " make strange sound"
    
    def eat(self) -> str:
        return self.name + " eat smth"
    
    def __str__(self) -> str:
        return f"Name: {self.name} | Age: {self.age} | Weight: {self.weight} kg"
    
class Dog(Animal):
    
    def __init__(self,name : str,age: int,weight: float,breed: str):
        super().__init__(name,age,weight)
        self.breed = breed
    
    def speak(self) -> str:
        return f"{self.name} make sound gav-gav"
    
    def eat(self) -> str:
        return f"{self.name} eat meat"
    
    def fetch_ball(self) -> str:
        return f"{self.name} returned the ball"
    
    def __str__(self) -> str:
        return super().__str__() + f" | Breed: {self.breed}"
    
class Cat(Animal):
     
    def __init__(self,name: str,age : int,weight : float,color: str):
        super().__init__(name,age,weight)
        self.color = color
    
    def speak(self) -> str:
        return f"{self.name} make sound meow-meow"
    
    def eat(self) -> str:
        return f"{self.name} eat whiskas"
    
    def play(self) -> str:
        return f"{self.name} play with ball"
    
    def __str__(self) -> str:
        return super().__str__() + f" | Color: {self.color}"
