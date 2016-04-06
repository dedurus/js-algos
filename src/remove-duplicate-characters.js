// Remove any duplicate characters from a string

function removeDuplicateCharacters(str){
  var len = str.length,
      char, 
      charCount = {}, 
      returnString = [];
  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1)
       returnString.push(j);
  }
  return returnString.join('');
}

removeDuplicateCharacters('Some arbitrary testing string here');
