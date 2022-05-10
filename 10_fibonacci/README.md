# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.

1  2  3  4
1, 1, 2, 3
```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```


const fibonacci = function(number) {
    num1 = 0;
    num2 = 1;
    sum = num1 + num2;

   num1 = num2 // 1 + 1;
   sum = num1 + num2
                                 num1  num2   sum
                           num1  num2  sum
}                    num1  num2  sum
          num1 num2  sum   sum
     num1 num2 sum   sum
4 --> 0,   1,   1,    2,    3,    5,    8,    13
num1 = 0;
num2 = 1;
sum = num 1 + num2; 1


0, 1

2?
num1 = 0;
num2 = 1;
sum = num1 + num2;
num1 = num2;
num2 = sum;



2




2
num1 = 


for {let i = 0; i <= 5; i++) {
  
  num1 = 0;
num2 = 1;
sum = num1 + num2;
num1 = num2;
num2 = sum;
  
  }
alert(sum);
