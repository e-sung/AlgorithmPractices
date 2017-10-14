function findTreasure(N, arrA, arrB) {
    var mapA = generateBinaryMapFrom(N,arrA)
    var mapB = generateBinaryMapFrom(N,arrB)

    var mapToReturn = []
    for (let i = 0; i < N; i++) {
        var colums = []
        for (let j = 0; j < N; j++) {
            if (mapA[j][i] == "1" || mapB[j][i] == "1") {
                colums.push("#")
            } else {
                colums.push(" ")
            }
        }
        mapToReturn.push(colums)
    }
    return mapToReturn
}

function generateBinaryMapFrom(N,array) {
    var rows = []
    for (let i = 0; i < N; i++) {
        var binary = decimalToBinary(N,array[i])
        var colums = []
        for (let j = 0; j < binary.length; j++) {
            colums.push(binary[j])
        }
        rows.push(colums)
    }
    return rows
}

function decimalToBinary(N,decimal) {
    var returnValue = ""
    while (decimal > 0) {
        returnValue = decimal % 2 + returnValue
        decimal /= 2
        decimal = Math.floor(decimal)
    }

    if (returnValue.length < N) {
        while (returnValue.length < N) {
            returnValue = "0" + returnValue
        }
    }

    return returnValue
}

console.log(decimalToBinary(5,9))
