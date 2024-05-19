function isLeapYear(year) {
    // Leap years are divisible by 4
    // But not by 100 unless they are also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Test the function
const year = 2024; // You can change this to test different years
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
