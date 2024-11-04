let answer = parseInt(prompt("Give the end number to play fizzbuzz: "));

for(let i=1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
    
}