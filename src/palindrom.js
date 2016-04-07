// Check if a string is a palindrom

// 1. 
function isPalindrome(str){
  var i, 
      len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}


// test 1
isPalindrome('kalabalak');


// 2. 
function isPalindrome_2(str) {
    return str == str.split('').reverse().join('');
}

// test 2
isPalindrome_2('kalabalak');