
const sortYear = (movies) => {
  return movies.sort((a, b) => {
    return a.year > b.year ? -1 : 1;
  });
};

function sortTitle(movies){
  return movies.sort((a, b) => {
    const aTitle = a.title.slice(0, 3) === 'The' ? a.title.slice(4) : a.title;
    const bTitle = a.title.slice(0, 3) === 'The' ? b.title.slice(4) : b.title;
    if(aTitle < bTitle){
      return -1;
    }else if (aTitle > bTitle){
      return 1;
    }else{
      return 0;
    }
  });
}

module.exports = { sortYear, sortTitle };




// const arr = [8, 4 23, 42, 16, 15];

// const selectionSort = arr => {
//   const len = arr.length;

//   //---- other option / example
//   const swap = (arr, idx1, idx2) => {
//     ([arr[idx1], idx[idx2]] = [arr[idx2], arr[idx1]]);
//   }

//   for(let i = 0; i < len; i++){
//     let idxOfMin = i;

//     for(let j = i + 1; j < len; j++){
//       if(arr[j] < arr[idxOfMin]){
//         idxOfMin = j;
//       }
//     }
//     if(idxOfMin !== i){
//       swap(arr, idxOfMin, i);
//       //swap positions
//       // const temp = arr[idxOfMin];
//       // arr[idxOfMin] = arr[i];
//       // arr[i] = temp;
//     }
//   }
//   return arr;
// }

// selectionSort(arr);

// console.log(arr);
