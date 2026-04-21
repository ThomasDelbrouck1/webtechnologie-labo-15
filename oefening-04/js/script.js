function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

const currentYear = new Date().getFullYear();

for (let year = 1950; year <= currentYear; year++) {
    if (isLeapYear(year)) {
        console.log(`Het jaartal ${year} is een schrikkeljaar.`);
    }
}
