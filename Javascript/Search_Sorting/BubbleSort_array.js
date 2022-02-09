function swap( A, i, j) {
    var temp = A[i]
    A[i] = A[j]
    A[j] = temp
    }

function bubbleSort(A) {
    for (var i=0, ALength = A.length; i<ALength; i++) {
        for (var j=0; j<=i; j++) {
            if (A[i] < A[j]) {
                swap(A, i, j)
            }
        }
    }
    return A
}

console.log( bubbleSort([6,1,2,3,4,5]) )  // [1,2,3,4,5,6]