//  Getting N-th Fibonacci number

// 1.  --------------------------
function fibonacci(n){
  var seq = [0, 1];
  
  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   seq[i] = seq[i-1]+seq[i-2];
  }

 return seq[n];
} 

fibonacci(12);

// 2. Recursive -----------------
function fibonacci_recursive(n){
  if(n<=1)
    return n;
  else
    return fibonacci_recursive(n-1) + fibonacci_recursive (n-2);  
}

fibonacci_recursive(12);


// 3. Dynamic
function dynFib(n) {
  var val = [];
  for (var i = 0; i <= n; ++i) {
    val[i] = 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  else {
    val[1] = 1;
    val[2] = 2;
    for (var i = 3; i <= n; ++i) {
      val[i] = val[i-1] + val[i-2];
    }
  return val[n-1];
  }
}
// test
console.log(dynFib(12));


// 4. Iterative (same as dynamic #3, but without using an array)
function iterFib(n) {
  var last = 1;
  var nextLast = 1;
  var result = 1;
  for (var i = 2; i < n; ++i) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
}

// test
console.log(iterFib(12));