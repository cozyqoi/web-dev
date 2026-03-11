from models import Animal,Dog,Cat

def main():
    dog1 = Dog("rex", 12, 34,"tazy")
    dog2 = Dog("dex", 13, 3, "alabay")
    cat1 = Cat("murka", 3, 12, "orange")
    cat2 = Cat("shurka", 4, 15,"black")
    nn1 = Animal("noname", 23, 54)
    nn2 = Animal("ayew", 34, 123)
    
    zoo = [dog1,dog2,cat1,cat2,nn1,nn2]
    
    for z in zoo:
        print(z)
        print(z.speak())
        print(z.eat())
        if isinstance(z, Dog):
            print(z.fetch_ball())
        elif isinstance(z, Cat):
            print(z.play())
    
if __name__ == "__main__":
    main()
    