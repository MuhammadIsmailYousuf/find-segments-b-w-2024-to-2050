//Write a JavaScript program to find out if 1st January will be a Sunday 
//between 2024 and 2050.

for (var i = 2024; i <= 2050; i++) {
    var januaryFirst = new Date(i, 0, 1); 
    if (januaryFirst.getDay() === 0) {
        console.log("1st January " + i + " is a Sunday.");
    }
}