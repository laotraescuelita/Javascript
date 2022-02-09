function insertionSort( A ) {
    var value // the value currently being compared
    var i // index into unsorted section
     var j // index into sorted section

    for (i=0; i < A.length; i++) {
        value = A[i]
        for (j=i-1; j > -1 && A[j] > value; j--) {
            A[j+1] = A[j]
        }
        A[j+1] = value
    }
    return A
}
console.log( insertionSort([6,1,23,4,2,3]) )  // [1, 2, 3, 4, 6, 23]