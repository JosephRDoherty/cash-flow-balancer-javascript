// This is sortof a logic tester
// The idea is for this to eventually be extrapolated across multiple files and classes and functions
// This is mostly to test my math logic and make the actual balancing work.
// Let's see how this goes
console.log("Welcome to the Logic Tester");

// Initialize the bill array, where all of our bills are stored
const billArray = [];
let billGenCount = 0;

// Creates bill object
const billFactory = (name, amount, dueDate) => {
    return {
        name,
        amount,
        dueDate,

        Print(){
            console.log(`${name}, Amount: ${amount}, Due: ${dueDate}`);
        }
        
        
    }
}

// Generates a bill object with random data, used for testing
function randBillFactory() {
    const maxBill = 200;
    billGenCount += 1;
    const billName = "Generated Bill " + billGenCount;
    const billAmount = Math.floor(Math.random() * maxBill);
    const billDue = Math.floor(Math.random() * 28);

    return billFactory(billName, billAmount, billDue);
}


//Initialize bills here
//These are all randomly generated bills for testing purposes
// I hate this implimentation of push() to the array, but I can't find a better way right now
const bill1 = new randBillFactory();
billArray.push(bill1);
const bill2 = new randBillFactory();
billArray.push(bill2);
const bill3 = new randBillFactory();
billArray.push(bill3);
const bill4 = new randBillFactory();
billArray.push(bill4);
const bill5 = new randBillFactory();
billArray.push(bill5);
const bill6 = new randBillFactory();
billArray.push(bill6);
const bill7 = new randBillFactory();
billArray.push(bill7);
const bill8 = new randBillFactory();
billArray.push(bill8);


for (let i=0; i < billArray.length; i++){
    console.log(billArray[i].Print());
}


bill1.Print();

console.log("Logic Tester complete");