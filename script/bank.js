
class BankAccount{
    constructor(ownerName,initialBalance){ //big O(1)
        this.ownerName = ownerName; //big O(1)
        this.initialBalance = initialBalance; //big O(1)
        this.hestory = []; //big O(1)
    }

    deposit(amount){ //big O(1)
        this.initialBalance + amount;  //big O(1)
    }

    withdraw(amount){
        if(amount > this.initialBalance){ //big O(1)
            console.log(`your balance are not enough`); //big O(1)
        }else{ 
            this.initialBalance - amount; //big O(1)
        }
    }

    transferTo(anotherAccount, amount){ //big O(1)
        if(this.initialBalance > amount){ //big O(1)
            this.initialBalance - amount ; //big O(1)
            anotherAccount.deposit(amount); //big O(1)
        }else{
            console.log(`you need more money sir!`) //big O(1)
        }
    }

    getSummary(){
        return{
            ownerName : this.ownerName,  //big O(1)
            initialBalance : this.initialBalance  //big O(1)
        };
    }

    printHistory(){
        
    }
}





const acc1 = new BankAccount("John", 500); //big O(1)
const acc2 = new BankAccount("Sara", 300); //big O(1)
acc1.transferTo(acc2, 200); //big O(1)
acc1.getSummary(); //big O(1)
acc2.getSummary();  //big O(1)
acc1.printHistory(); //big O(1)

