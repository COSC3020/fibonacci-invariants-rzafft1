[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11986123&assignment_repo_type=AssignmentRepo)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

- Our array that starts with [0,1], 
therefore therefore the state of this world so to say, is that our array length - 1
contains the number of fibonacci numbers currently in the array and **n in the call fib(n) is the number of fibonacci numbers that still need to be added to the array**

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

- At the start of each recursive call, n in is the amount of fibonacci numbers that need to be added. Therefore we can say that before the first call, n = n because no fibonacci numbers have been added. After the first call, n = n - 1, therefore (n-1) fibonacci numbers still need to be added to the array. Since we start with the array [0,1] we will stop once n = 1, and since we started with one fibonacci number, we have no more fibonacci numbers to add once n = 1. 

- Every iteration, n will decrement, telling us that we have inserted a fibonacci number, and we only have (n-1) fibonacci number left to add to the array

- We know this is true because at the end of our code, n = 1, signaling that we have no more fibonacci numbers to add to the array. It stops at n = 1 instead of n = 0, because we initalized the array to start with a single fibonacci number, and then we need to add n-1 more fibonacci numbers to the array

example ...

- arr = [0,1] ........ n = 4
- arr = [0,1,1] ...... n = 3
- arr = [0,1,1,2] .... n = 2
- arr = [0,1,1,2,3] .. n = 1
- return [0,1,1,2,3] (n-1 = 0, we have no more fibonacci numbers to add)

- as showed above, in each iteration, (n-1) is equal to the number of fibonacci numbers that still need to be added. Once (n-1) = 0 we know we can return the array because no more fibonacci numbers need to be added.
