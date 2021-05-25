class Account {
    constructor(id,name, balance){
        this.id = id,
        this._name = name,
        this._balance = balance
    }

    get name() {
      return this._name;
    }

    set name(name) {
        if (typeof name === "string") {
            this._name = name;
        }
        throw new Error("name must be only string");
      }

    get balance (){
        return this._balance
    }  

    set balance (balance){
        if(isNaN(balance)){
            throw new Error('balance must be number')
        }
        this._balance = parseInt(balance)
    }

    toString(){
        return `${this._name}'s account balance is ${this._balance}$.`
    }

    credit(amount){
        return this._balance += amount
    }

    debit(amount){
        return  this._balance < amount ? 'Amount exceeded balance.' : this._balance -= amount
    }

    transferTo(anotherAccount, amount) {
        if (this._balance < amount){
            return 'Amount exceeded balance.'
        }else{
            anotherAccount._balance += amount
            return this._balance -= amount
        }
    }

    static identifyAccounts(accountFirst, accountSecond){
        let isSame = true
        for (const key in accountFirst) {
            if (accountFirst[key] !== accountSecond[key]) {
                isSame = false
            }
        }
        return isSame
    }

}
 
const savingAcc = new Account(0, 'Saving account', 2000)
const cardAcc = new Account(1, 'Card account', 1000)

console.log(savingAcc.balance); 
console.log(savingAcc.credit(400));
console.log(savingAcc.debit(1000));
console.log(savingAcc.transferTo(cardAcc, 1000)); 
console.log(cardAcc._balance); 


console.log(savingAcc.toString()); 



