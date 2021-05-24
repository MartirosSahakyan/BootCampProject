# Prototype / This / New

> There are implementetions of **new** operator and **apply,call,bind** methods
## Tasks Decription  

* **Calculator Constructor**   
  *Create functions forthe Calculator class that can do the following:*
    1. Add two numbers.
    2. Subtract two numbers.
    3. Multiply two numbers.
    4. Divide two numbers.
 

* **Person Constructor**  
  *Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age,return a sentence in the following format:  
    {other person name} is {olderthan / youngerthan / the same age as} me.*  
    1. Write a Person Constructorthat initializes name and age from arguments.
    2. All instances of Person should initialize with an empty stomach array.
    3. Give instances of Person the ability to .eat("someFood"):
    4. When eating an edible, it should be pushed into the stomach.   
    5.The eat method should have no effect if there are 10 items in the stomach.
    6. Give instances of Person the ability to .poop():
    7. When an instance poops, its stomach should empty.
    8. Give instances of Person a method .toString():
    9. It should return a string with name and age. Example: "Mary, 50"

 * **Car Constructor**   
    1. Write a Car constructorthat initializes model and milesPerGallon from arguments.
    2. All instances built with Car:
        - should initialize with an tank at 0
        - should initialize with an odometer at 0 
    3. Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank. -
    STRETCH: Give cars ability to .drive(distance). The distance driven:
    4. Should cause the odometer to go up.
    5. Should cause the the tank to go down taking milesPerGallon into account.
    6. STRETCH: A car which runs out of fuel while driving can't drive any more distance:
    7. The drive method should return a string "Iran out of fuel at x miles!" x being odometer.  

* **Baby Constructor**   
    1. Write a Baby constructor subclassing Person.
    2. Besides name and age, Baby takes a third argument to initialize favoriteToy.
    3. Besides the methods on Person.prototype, babies have the ability to .play():
    4. Should return a string "Playing with x", x being the favorite toy.
    
## Literature

[F.prototype](https://javascript.info/function-prototype)    
[Prototype methods, objects without __proto__](https://javascript.info/prototype-methods)    
[The "new Function" syntax](https://javascript.info/new-function)    
[Function binding](https://javascript.info/bind)    