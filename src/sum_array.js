// Check whether there are any two numbers from an unsorted array that will sum up to a given number


// 1.
function sumCheck(arr, sum){
  var len = arr.length;
  
  for(var i =0; i<len-1; i++){  
     for(var j = i+1;j<len; j++){
        if (arr[i] + arr[j] == sum)
            return true;
     }
  }
  
  return false;
}

sumCheck([5,4,5,8,9,1,3,7,6], 13);


// 2.
function sumCheck_2(arr, sum){
  var differ = {}, 
      len = arr.length,
      substract;
  
  for(var i =0; i<len; i++){
     substract = sum - arr[i];

     if(differ[substract])
       return true;       
     else
       differ[arr[i]] = true;
  }
  
  return false;
}

sumCheck_2([5,4,5,8,9,1,3,7,6], 13);