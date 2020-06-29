// Add your functions here
function map(source, callback){
  let result = [];
  source.forEach(elem => {
    result.push(callback(elem));
  })
  return result
}

function reduce(source, callback, startingPoint){
  startingPoint = (startingPoint == undefined) ? 0:startingPoint;
  let result = 0;
  source.forEach(elem => {
    result += callback(accum, currenValue);
  })
  return result+startingPoint
}
