let originalString = prompt("Which word do you want to make a straicase of?");
const originalL = originalString.length;
let subStringL;

// if the originalString is just one char long, print it and exit
if (originalL === 1) {
  console.log(originalString);
} else {
// if the originalString is longer than 1 char, the computer comes here
// we set substringL as originalL
  subStringL = originalL;
// then the computer enters the while loop because substringL is greater than originalL
  while (subStringL > 0) {
    // the computer creates a subString variable to get printed
    let subString = originalString.substring(0, subStringL);
    console.log(subString);
    // the computer decreaments the subStringL by one
    subStringL--;
    // the while loop goes back to line-28, i.e. its entry point again and checks whether the condition is still true and if it is true, it executes the while loop again
    // in case the while loop condition is evaluated false, the computer doesn't enter the while loop and proceeds to the next block of code
  }
  // this is the next block of code that executes sequentially once the first while loop has performed its duty
  // the computer reaches here and sets the subStringL value to 2
  // this value 2 is important to give the staircase effect
  subStringL = 2;
  // after setting the value to 2, the computer proceeds to enter this while loop
  // it will keep executing this while loop as long as the condition is met
  while (subStringL <= originalL) {
    subString = originalString.substring(0, subStringL);
    console.log(subString);
    subStringL++;
    // after executing this last line, the computer goes to the line-43 and checks whether the condition is still true, if it is evaluated false, the computer stops the execution altogether
    // since this is the last line of code in this program, the execution ends
  }
}
