function mergeSort(array) {
    if (array.length == 1) {
        return array
    }

    let middleIndex = Math.floor(array.length / 2)
    var array1 = array.slice(0, middleIndex)
    var array2 = array.slice(middleIndex, array.length)

    array1 = mergeSort(array1)
    array2 = mergeSort(array2)

    var sortedArray = []

    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] < array2[0]) {
            sortedArray.push(array1.shift())
        } else {
            sortedArray.push(array2.shift())
        }
    }
    if (array1.length > 0) {
        sortedArray.push.apply(sortedArray, array1.slice(0, array1.length))
    } else if (array2.length > 0) {
        sortedArray.push.apply(sortedArray, array2.slice(0, array2.length))
    }
    return sortedArray
}
