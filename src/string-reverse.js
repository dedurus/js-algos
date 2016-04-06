// Reverse a string


// 1.
function reverse_string(str){
  var reversed_string = '';
  for(var i = str.length-1; i>=0;i--){
    reversed_string +=str[i];
  }
  return reversed_string;
}

// test
reverse_string('Some test string');


// 2. By using array as a buffer
function reverse_with_array(str){
  var reversed_string = [];
  if(!str || typeof str != 'string' || str.length < 2 ) return str;
  
  for(var i = str.length-1; i>=0;i--){
    reversed_string.push(str[i]);
  }
  return reversed_string.join('');
}

// test 2
reverse_with_array('Some test string');



// 3. Recursive
function reverse_recursive(str) {
    if (str === "") {
        return "";
    } else {
        return reverse_recursive(str.substr(1)) + str.charAt(0);
    }
}

// test 3
reverse_recursive('Some test string');



// 4. Using built-in methods `reverse()` and `join()`
function reverse(str){
  if(!str || str.length <2) return str;
  
  return str.split('').reverse().join('');
}

// test 4
reverse('Some test string');
