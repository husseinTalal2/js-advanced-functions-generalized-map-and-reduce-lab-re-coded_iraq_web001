// Add your functions here
function map(source, callback){
  let result = [];
  source.forEach(elem => {
    result.push(callback(elem));
  })
  return result
}

function reduce(source, callback){
  let result;
  source.forEach(elem => {
    result += callback(elem);
  })
  return result
}
