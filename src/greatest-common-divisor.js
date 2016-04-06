// Greatest common divisor of two numbers

// 1.
 // !!! Warning: this function won't work for negative numbers !!! // 
function gcd(a, b){
  var divisor = 2, 
      greatestDivisor = 1;

 
  if (a < 2 || b < 2)
     return 1;
  
  while(a >= divisor && b >= divisor){
   if(a %divisor == 0 && b% divisor ==0){
      greatestDivisor = divisor;      
    }
   divisor++;
  }
  return greatestDivisor;
}

// Test
gcd(27, 81);


// 2.
function gcd_2(a, b){
   if(b == 0)
     return a;
   else 
     return gcd_2(b, a%b);
}

// Test 2
gcd_2(27, 81); 
