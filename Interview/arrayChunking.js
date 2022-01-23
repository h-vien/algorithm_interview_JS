//* Example
// ? chunk([1,2,3,4],2) => [[1,2],[3,4]]
// ? chunk([1,2,3,4,5,6],4) => [[1,2,3,4],[5,6]]
const chunk = (arr, size) => {
  const _arr = [];
  for (let el of arr) {
    const last = _arr[_arr.length - 1];
    if (!last || last.length === size) {
      _arr.push([el]);
    } else {
      last.push(el);
    }
  }
  console.log(_arr);
  return _arr;
};

// chunk([1, 2, 3, 4], 2);
// chunk([1, 2, 3, 4, 5, 6], 4);

const chunk_2 = (arr, size) => {
  const chunk = [];
  let idx = 0;
  while (idx < arr.length) {
    chunk.push(arr.slice(idx, idx + size));
    idx += size;
  }
  console.log(chunk);
};
chunk_2([1, 2, 3, 4], 2);
chunk_2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 12, 3, 123, 123], 5);
