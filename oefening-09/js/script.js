const address = { street: "Lange Nieuwstraat", number: 14, city: "Antwerpen" };
const person = { firstName: "Lena", lastName: "Peeters", age: 21 };

const addressCopy = { ...address, number: 99 };
const contact = { ...person, ...address };

// Arrow notatie:
// const copyAddressWithNewNumber = (addressToCopy, newNumber) => {
//     return { ...addressToCopy, number: newNumber };
// };
//
// const combinePersonAndAddress = (personToCombine, addressToCombine) => {
//     return { ...personToCombine, ...addressToCombine };
// };

console.log("Kopie:");
console.log(addressCopy);
console.log("Contact:");
console.log(contact);
console.log("Origineel ongewijzigd:");
console.log(address);
