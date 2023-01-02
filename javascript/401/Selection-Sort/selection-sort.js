const arr = [8, 4 23, 42, 16, 15];

const selectionSort = arr => {
  const len = arr.length;

  //---- other option / example
  const swap = (arr, idx1, idx2) => {
    ([arr[idx1], idx[idx2]] = [arr[idx2], arr[idx1]]);
  }

  for(let i = 0; i < len; i++){
    let idxOfMin = i;

    for(let j = i + 1; j < len; j++){
      if(arr[j] < arr[idxOfMin]){
        idxOfMin = j;
      }
    }
    if(idxOfMin !== i){
      swap(arr, idxOfMin, i);
      //swap positions
      // const temp = arr[idxOfMin];
      // arr[idxOfMin] = arr[i];
      // arr[i] = temp;
    }
  }
  return arr;
}

selectionSort(arr);

console.log(arr);
