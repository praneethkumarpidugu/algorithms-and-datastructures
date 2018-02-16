// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution # 1

// function chunk(array, size) {
//   var arr_list = [];
//   for (var i=0; i<array.length;)
//   {
//     var temp_arr_list = [];
//     while (temp_arr_list.length <size && i < array.length){
//         temp_arr_list.push(array[i]);
//         i++;
//     }
//     arr_list.push(temp_arr_list);
//   }
//   return arr_list;
// }

// Solution # 2

function chunk(array, size)
{
  const chunked = [];
  for (let element of array)
  {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size)
    {
      chunked.push([element]);
    }
    else {
      last.push(element);
    }
  }
  return chunked;
}

module.exports = chunk;
