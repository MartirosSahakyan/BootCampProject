# Classes / OOP 

## Tasks Decription  

* **Task 1 Author-Book**   
  *Create an Author class and a Book class.*
    Book should have methods    
    - getProfit() - which calculates the profit from the book based on the price and quantity.
    - toString()
 

* **Task 2 Account**  
  *Create an Account class. Account should have following methods*  
    - credit(amount) - which should add amount to balance and return the updated balance.
    - debit(amount) - which should subtract the amount from the balance, if amount is less than the
        balance, otherwise output “Amount exceeded balance.”
    - transferTo(anotherAccount, amount) - which should subtract the amount from the account
        balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
    - static method: identifyAccounts(accountFirst, accountSecond) - which gets two accounts
        and identifies if they are the same or not comparing all fields.
    - toString()
 

 * **Task 3 Person-Student**   
   *Write classes: Person class and Student class. Person*
    *Student is inherited from Person. It should have*
    - passExam will update that data, so if student passed all the exams(grade is great or equal to
    50), its year should be increased by one.
    - It should have a method isAllPassed().

 * **Coffee Shop**   
   *Properties::*
    - name: a string (basically, of the shop)  
    - menu: an array of items (of object type), with each item containing the item (name of the item), type (whetherfood or a drink) and price.
    - orders: an empty array

    *Methods::*
    - addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise,return "This item is currently unavailable!"
    - fulfillOrder: if the orders array is not empty,return "The {item} is ready!". If the orders array is empty,return "All orders have been fulfilled!" 
    - listOrders:returns the list of orders taken, otherwise, an empty array.
    - dueAmount:returns the total amount due for the orders taken.
    - cheapestItem:returns the name of the cheapest item on the menu.
    - drinksOnly:returns only the item names of type drink from the menu.
    - foodOnly:returns only the item names of type food from the menu.
    - IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

 * **Shiritori**   
   *This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:*
   - First character of next word must match last character of previous word.
   - The word must not have already been said.

   *Properties::*
    - words: an array of words already said.
    - game_over: a boolean that is true if the game is over.

    *Methods::*
    - play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules #1 and #2 above).
      - If it is valid, it adds the word to the words array, and returns the words array.
      - If it is invalid (eitherrule is broken), itreturns "game over" and sets the game_over boolean to true.
    - restart: a method that sets the words array to an empty one [] and sets the game_over boolean to
    false. It should return "game restarted".

  

    
## Literature

[Classes](https://javascript.info/classes)    
[OOP in JavaScript](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)      
[OOP in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)    
