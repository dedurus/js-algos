// Shuffle an array 

// 1. Fisher–Yates shuffle (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
}

// test
shuffle(['s','h','u','f','l', 'f', 'e']);


// 2. Optimized Fisher-Yates
function shuffle_optimized(array) {
    var rand, index = -1,
        length = array.length,
        result = Array(length);
    while (++index < length) {
        rand = Math.floor(Math.random() * (index + 1));
        result[index] = result[rand];
        result[rand] = array[index];
    }
    return result;
}

function fisherYates( array ){
 var count = array.length,
     randomnumber,
     temp;
 while( count ){
  randomnumber = Math.random() * count-- | 0;
  temp = array[count];
  array[count] = array[randomnumber];
  array[randomnumber] = temp
 }
}

// test 2
shuffle_optimized(['s','h','u','f','l', 'f', 'e']); 


// 3. ES2015 version
Array.prototype.shuffle_ES2015 = function() {
  let m = this.length, i;
  while (m) {
    i = ~~(Math.random() * m--);
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
}

// test 3
['s','h','u','f','l', 'f', 'e'].shuffle_ES2015();



// 4. Durstenfeld shuffle algorithm (computer-optimized version of Fisher-Yates https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm)
function shuffle_Durstenfeld(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


// test 4
shuffle_Durstenfeld(['s','h','u','f','l', 'f', 'e']);