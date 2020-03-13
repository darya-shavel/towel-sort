
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix || matrix.length === 0){
        return [];
    }
    let array =[];
    for (let i = 0; i < matrix.length; i++) {
        let arr =[];
        if (i % 2 == 0) {
            arr =arr.concat(matrix[i]);  
        }else{
            arr =arr.concat(matrix[i].reverse());  
        }
      array = array.concat(arr);
    }
    return array;
}
