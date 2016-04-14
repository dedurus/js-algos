// Recursive function to compute the factorial of any number

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

// test
factorial(5);