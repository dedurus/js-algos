// Remove duplicate elements from array

function removeDups(arr){
  var dupes ={},
      returnArray = [], 
      el;

  for(var i =0; i<arr.length; i++){
    el = arr[i];
    if(!dupes[el]){
      returnArray.push(el);
      dupes[el] = true;
   }
  }
  return returnArray;
}

removeDups([1,3,3,3,1,5,6,7,8,1]);