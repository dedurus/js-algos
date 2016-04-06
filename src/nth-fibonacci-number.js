//  Getting Nth Fibonacci number

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
