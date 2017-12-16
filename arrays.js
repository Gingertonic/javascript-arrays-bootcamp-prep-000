var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(arr, toAdd) {
  var newArray = [ ...arr];
  newArray.unshift(toAdd);
  return newArray;
}

function  destructivelyAddElementToBeginningOfArray(arr, toAdd) {
  arr.unshift(toAdd);
  return arr;
}

function addElementToEndOfArray(arr, toAdd) {
  var newArray = [ ...arr];
  newArray.push(toAdd)
  return newArray;
}

function  destructivelyAddElementToEndOfArray(arr, toAdd) {
  arr.push(toAdd);
  return arr;
}

function accessElementInArray(arr, i){
  return arr[i];
}

function destructivelyRemoveElementFromEndOfArray(arr, toRemove){
  arr.pop(toRemove);
  return arr;
}
