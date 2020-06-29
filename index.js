// Add your functions here
function map(source, callback){
  let result = [];
  source.forEach(elem => {
    result.push(callback(elem));
  })
  return result
}

function reduce(source, callback, startingPoint){
  let result = (startingPoint == undefined) ? 0:startingPoint;
  source.forEach(elem => {
    result+=callback(elem, result);
  })
  return result
}
