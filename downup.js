// Take the String, for example: temp
// Check the originalString length and assign it to var originalL
// If the originalString length is more than 1
    // Create a subString with one character less
    // Call the subString length subStringL
    // Print this substring
    // Repeat this until the subStringL is exactly 1
    // When subStringL becomes 1, start increasing it by 1
    // print the subString
    // Repeat this until the subStringL becomes same as the OriginalL
    // Print the originalL again
    // End
    
// else print Original string and exit


let originalString = prompt("Which word do you want to make a straicase of?");
let originalL = originalString.length;
let subStringL = originalL;

if (originalL === 1 ) {
    console.log(originalString);
} else if (originalL > 1 ) {
    while(subStringL >= 1) {
    let subString = originalString.substring(0, subStringL);
    console.log(subString);
    subStringL--;
    }
}

if (subStringL === 1) {
    while(subStringL === originalL) {
    subString = originalString.substring(0, subStringL);
    console.log(subString);
    subStringL++;
    }
}