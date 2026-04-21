function getNumber() {
    return 15;
}

function getString() {
    return "Hallo wereld";
}

function getBoolean() {
    return true;
}

function printMessage() {
    console.log("Dit is een bericht in de console.");
}

function printCalculation(numberOne, numberTwo) {
    const result = numberOne + numberTwo;
   console.log(`De som van ${numberOne} en ${numberTwo} is ${result}.`);
}

console.log(getNumber());
console.log(getString());
console.log(getBoolean());
printMessage();
printCalculation(8, 7);
