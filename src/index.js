
exports.min = function min (array) { 
  if (array!==undefined && array.length>0){
    let min, i;
    min = array[0];
    for (i=0; i<array.length;i++)
    if (array[i]<min) min=array[i];
    return min;
  }
  else return 0;
}

exports.max = function max (array) {
  if (array!==undefined && array.length>0){
    let max, i;
    max = array[0];
    for (i=0; i<array.length;i++)
    if (array[i]>max) max=array[i];
    return max;
  }
  else return 0;
}

exports.avg = function avg (array) {
  if (array!==undefined && array.length>0){
    let i, average=0;
    for (i=0; i<array.length;i++) average+=array[i];
    return average/array.length;
  }
  else return 0;
}
