
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix){
    return matrix.reduce((arr, current, sum) => {
      current.sort((a, b) => !(sum & 1) ? a - b : b - a).forEach(item => arr.push(item));
      return arr;
    }, []);
  } else {
    return [];
  }

}
