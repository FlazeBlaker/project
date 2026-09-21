interface Payment{
    pay(amount:number):void;
}

class PaymentMethod{
    constructor(protected owner: string){

    }

    showOwner(): void{
        console.log(`Payment: owner: ${this.owner}`);
    }
}

class UPI extends PaymentMethod implements Payment{
    constructor(owner:string,private upiID:string){
        super(owner);
    }

    pay(amount:number):void{
        console.log(`Paid: ₹${amount} using UPI ID: ${this.upiID}`);
    }
}

class CreditCard extends PaymentMethod implements Payment{
    constructor(owner:string,private cardNumber:string){
        super(owner);
    }
    
    pay(amount:number):void{
        console.log(`Paid: ₹${amount} by card ending with ${this.cardNumber.slice(-4)}`);
    }
}

const upi = new UPI("Jay","jay@upi");
const cc = new CreditCard("Yash","9876543210");

upi.showOwner();
upi.pay(500);

cc.showOwner();
cc.pay(10000);