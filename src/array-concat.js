//  Creates a new array concatenating `array_1` with `array_2`

function array_concat(array_1, array_2) {
    var index = -1,
        length = array_1.length,
        othIndex = -1,
        othLength = array_2.length,
        result = Array(length + othLength);

    while (++index < length) {
      result[index] = array_1[index];
    }
    while (++othIndex < othLength) {
      result[index++] = array_2[othIndex];
    }
    return result;
}