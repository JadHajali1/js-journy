
class BankAccount{
    constructor(ownerName,initialBalance){ 
        this.ownerName = ownerName; 
        this.initialBalance = initialBalance; 
        this.hestory = []; 
    }

    deposit(amount){
        this.initialBalance + amount;  
    }

    withdraw(amount){
        if(amount > this.initialBalance){ 
            console.log(`your balance are not enough`); 
        }else{ 
            this.initialBalance - amount; 
        }
    }

    transferTo(anotherAccount, amount){ 
        if(this.initialBalance > amount){ 
            this.initialBalance - amount ; 
            anotherAccount.deposit(amount); 
        }else{
            console.log(`you need more money sir!`) 
        }
    }

    getSummary(){
        return{
            ownerName : this.ownerName, 
            initialBalance : this.initialBalance 
        };
    }

    printHistory(){
        
    }
}





const acc1 = new BankAccount("John", 500); 
const acc2 = new BankAccount("Sara", 300);
acc1.transferTo(acc2, 200); 
acc1.getSummary();
acc2.getSummary();  
acc1.printHistory(); 

