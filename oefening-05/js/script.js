function sum(numbers) {
    console.log(numbers);

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

const numbers = [1, 2, 4, 5];
console.log(`de som van de array is: ${sum(numbers)}.`);
