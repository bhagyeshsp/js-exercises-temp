**For Loop**

1. **Array Iteration:**
   ```javascript
   const products = [
       { name: 'Product 1', price: 10 },
       { name: 'Product 2', price: 20 },
       { name: 'Product 3', price: 15 }
   ];

   let totalCost = 0;
   for (let i = 0; i < products.length; i++) {
       totalCost += products[i].price;
   }

   console.log('Total cost:', totalCost);
   ```

2. **String Manipulation:**
   ```javascript
   const str = 'hello world';
   let reversedStr = '';

   for (let i = str.length - 1; i >= 0; i--) {
       reversedStr += str[i];
   }

   console.log(reversedStr);
   ```

3. **Number Pattern:**
   ```javascript
   for (let i = 1; i <= 4; i++) {
       let row = '';
       for (let j = 1; j <= i; j++) {
           row += j + ' ';
       }
       console.log(row);
   }
   ```

4. **Prime Number Check:**
   ```javascript
   function isPrime(num) {
       if (num <= 1) {
           return false;
       }
       for (let i = 2; i * i <= num; i++) {
           if (num % i === 0) {
               return false;
           }
       }
       return true;
   }

   const num = 17;
   if (isPrime(num)) {
       console.log(num + ' is a prime number');
   } else {
       console.log(num + ' is not a prime number');
   }
   ```

5. **Fibonacci Series:**
   ```javascript
   let a = 0, b = 1;
   console.log(a);
   console.log(b);

   for (let i = 2; i < 10; i++) {
       let c = a + b;
       console.log(c);
       a = b;
       b = c;
   }
   ```

**While Loop**

1. **User Input:**
   ```javascript
   let num;
   do {
       num = parseInt(prompt('Enter a positive number:'));
   } while (num <= 0);

   console.log('You entered:', num);
   ```

2. **Guessing Game:**
   ```javascript
   const secretNumber = Math.floor(Math.random() * 10) + 1;
   let attempts = 0;

   while (attempts < 5) {
       const guess = parseInt(prompt('Guess a number between 1 and 10:'));
       attempts++;

       if (guess === secretNumber) {
           console.log('Congratulations, you guessed correctly!');
           break;
       } else {
           console.log('Incorrect guess. Try again.');
       }
   }

   if (attempts === 5) {
       console.log('You ran out of attempts. The secret number was:', secretNumber);
   }
   ```

3. **Menu-Driven Program:**
   ```javascript
   let choice;
   do {
       console.log('Menu:');
       console.log('1. Add');
       console.log('2. Subtract');
       console.log('3. Multiply');
       console.log('4. Divide');
       console.log('5. Exit');

       choice = parseInt(prompt('Enter your choice:'));

       switch (choice) {
           case 1:
               // Add logic
               break;
           case 2:
               // Subtract logic
               break;
           case 3:
               // Multiply logic
               break;
           case 4:
               // Divide logic
               break;
           case 5:
               console.log('Exiting...');
               break;
           default:
               console.log('Invalid choice. Please try again.');
       }
   } while (choice !== 5);
   ```

4. **Factorial Calculation:**
   ```javascript
   let num = 5, factorial = 1;
   let i = 1;

   while (i <= num) {
       factorial *= i;
       i++;
   }

   console.log('Factorial of', num, 'is', factorial);
   ```

5. **Countdown Timer:**
   ```javascript
   let count = 10;

   while (count >= 0) {
       console.log(count);
       count--;
   }

   console.log('Blast off!');
   ```

**Do-While Loop**

1. **Menu-Driven Program:**
   (Similar to the while loop example)

2. **Input Validation:**
   ```javascript
   let email;
   do {
       email = prompt('Enter your email address:');
   } while (!isValidEmail(email));

   console.log('Valid email:', email);

   function isValidEmail(email) {
       // Implement email validation logic
   }
   ```

3. **Dice Roll Simulation:**
   ```javascript
   let roll;
   do {
       roll = Math.floor(Math.random() * 6) + 1;
       console.log('You rolled:', roll);
   } while (roll !== 6);

   console.log('You rolled a 6!');
   ```

4. **Random Number Generation:**
   ```javascript
   let num;
   do {
       num = Math.floor(Math.random() * 100) + 1;
       console.log('Generated number:', num);
   } while (num <= 90);

   console.log('Number greater than 90:', num);
   ```

5. **Game Loop:**
   (Requires a game framework or library to implement a full-fledged game loop)
