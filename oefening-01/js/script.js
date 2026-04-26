function getNumber() {
    return 15;
}

// Arrow notatie:
// const getNumber = () => 15;

function getString() {
    return "Hallo wereld";
}

// Arrow notatie:
// const getString = () => "Hallo wereld";

function getBoolean() {
    return true;
}

// Arrow notatie:
// const getBoolean = () => true;

function printMessage() {
    console.log("Dit is een bericht in de console.");
}

// Arrow notatie:
// const printMessage = () => {
//     console.log("Dit is een bericht in de console.");
// };

function printCalculation(numberOne, numberTwo) {
    const result = numberOne + numberTwo;
    console.log(`De som van ${numberOne} en ${numberTwo} is ${result}.`);
}

// Arrow notatie:
// const printCalculation = (numberOne, numberTwo) => {
//     const result = numberOne + numberTwo;
//     console.log(`De som van ${numberOne} en ${numberTwo} is ${result}.`);
// };

console.log(getNumber());
console.log(getString());
console.log(getBoolean());
printMessage();
printCalculation(8, 7);
