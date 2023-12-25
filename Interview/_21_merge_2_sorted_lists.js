var mergeTwoLists = function (list1, list2) {
    const arr = []
    while (list1.length && list2.length) {
        if (list1[0] < list2[0]) {
            arr.push(list1.shift())
        }
        else {
            arr.push(list2.shift())
        }
        console.log(arr, list1, list2)
    }
    return [...arr, ...list1, ...list2]
};


const result = mergeTwoLists([1, 2, 4], [1, 3, 4])
console.log(result)