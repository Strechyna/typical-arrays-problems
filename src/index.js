
exports.min = function min (array) {
  if (isCorrectArray(array)) {
    sort(array);
    return array[0];
  }
  return 0;
}

exports.max = function max (array) {
  if (isCorrectArray(array)) {
    sort(array);
    return array[array.length - 1];
  }
  return 0;
}

exports.avg = function avg (array) {
  if (isCorrectArray(array)) {
    return sum(array) / array.length;
  }
  return 0;
}

function isCorrectArray (array) {
  return array != null && array != undefined &&  array.length > 0;
}

function sort (array) {
  array.sort((el1, el2) => el1 - el2);
}

function sum (array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}
