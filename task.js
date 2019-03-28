function comp(a, b){
  debugger;
  for (var i = 0; i < a.length; i ++) {
    for (var j = 0; j < b.length; j ++) {
      var sqrt = Math.sqrt(b[j])
      var pow = Math.pow(a[i], 2)
      if (pow != b[j] ) {
      return false;
      }
      return true;
    }
  }
}

function findElement(arr, el) {
  const index = arr.indexOf(el);
  return index != -1;
}

function compere(arr1, arr2) {
  if (!arr1
    || !Array.isArray(arr1)
    || !Array.isArray(arr2)
    || !arr2
    || !compereSums(arr1, arr2)
  ) {
    return false;
  }

  for (i = 0; i < arr1.length; i ++) {
      var el = arr1[i];
      found = findElement(arr2, el*el);
      if (found == false) {
        return false;
      }
  }
  return true;
}

function getSum (array) {
  const sum = array.reduce(function(acc, el) {
    return acc + el;
   }, 0)
  return sum;

}

function compereSums(arr1, arr2){
  return getSum(arr1.map((el) => (el*el))) == getSum(arr2);
}

module.exports = {
  comp,
  findElement: findElement,
  compere,
  compereSums
}
