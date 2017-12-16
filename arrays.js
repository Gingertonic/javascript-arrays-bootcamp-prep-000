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

function removeElementFromEndOfArray(arr, toRemove){
  arr.pop(toRemove);
  return arr;
}

function destructivelyRemoveElementFromBeginningOfArray(arr, toRemove){
  arr.shift(toRemove);
  return arr;
}

function removeElementFromBeginningOfArray(arr, toRemove){
  var newArray = [ ...arr];
  newArray.shift(toRemove);
  return arr;
}

