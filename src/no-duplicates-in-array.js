// Remove duplicate elements in array

function noDupilicates(arr){
  var dupes ={},
      no_dupes = [], 
      el;

  for(var i =0; i<arr.length; i++){
    el = arr[i];
    if( !dupes[el] ){
      no_dupes.push(el);
      dupes[el] = true;
   }
  }
  return no_dupes;
}

// Test
console.log(noDupilicates([1,1,2,5,5,5,7,7,7,7,25,25,100,100,100]));