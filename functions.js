function add7(n) {
    return n + 7;    
}

function multiply(num1, num2) {
    return num1 * num2
}

function capitalize(string) {
    let l = string.length;
    let upperString = string.at(0).toUpperCase();
    let lowerString = string.slice(1,l).toLowerCase();
    string = upperString + lowerString;
    return string;
}

function lastLetter(string) {
    let l = string.length;
    let lastChar = string.at(l-1);
    return lastChar;
}   