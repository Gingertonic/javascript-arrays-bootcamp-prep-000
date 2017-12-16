var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(arr, toAdd) {
  var newArray = [ ...arr];
  newArray.unshift(toAdd)];
}

function  destructivelyAddElementToBeginningOfArray(arr, toAdd) {
  arr.unshift(toAdd);
}

function addElementToEndOfArray(arr, toAdd) {
  var newArray = [ ...arr];
  newArray.push(toAdd)
}

function  destructivelyAddElementToEndOfArray(arr, toAdd) {
  arr.push(toAdd);
}

function accessElementInArray(arr, i){
  return arr[i];
}
