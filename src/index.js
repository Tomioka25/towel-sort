
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let arr = []
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++){
    if (i % 2 !== 0) {
      arr.push(matrix[i].reverse().join(','))
    } else {
      arr.push(matrix[i].join(','))
    }
  } 
  let b = arr.join(',');
  let number = b.split(',');
  return number.map(string => parseInt(string));
  
  
}
