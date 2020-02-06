// Thinking & Testing: A and B?

// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

Sample Testing
//a+b?
Test.assertSimilar(testit(0,1), 1, "")
Test.assertSimilar(testit(1,2), 3, "")
Test.assertSimilar(testit(10,20), 30, "")
//a*b?
Test.assertSimilar(testit(1,1), 1, "")
Test.assertSimilar(testit(1,3), 3, "")
//try "Attempt" find more...

JavaScript Bitwise OR (|)

JavaScript Uses 32 bits Bitwise Operands
JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

function testit(a,b){
    //return a+b ?
    //return a*b ?
    return a | b;
  }