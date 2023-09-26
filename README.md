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
contains the number of fibonacci numbers currently in the array.

- At the start of each recursive call the number of elements in the array - 1, is
also the number of fibonacci numbers.

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

- Every iteration, the array.length will only change if n >= 1, and in this case, 
the array length will match the number of fibonacci numbers in the array

- We know this is true because at the end of our code, the array.length-1 will always be equal to n, the number of fibonacci numbers in the array

example ...

- if n = 4 ... arr = [0,1,1] (size = 2) ... n - 1
- if n = 3 ... arr = [0,1,1,2] (size = 3) ... n - 1
- if n = 2 ... arr = [0,1,1,2,3] (size = 4) .. n - 1
- if n = 1 ... return [0,1,1,2,3]

as showed above, the size should always be equal to the number of fibonacci
numbers currently in the array.