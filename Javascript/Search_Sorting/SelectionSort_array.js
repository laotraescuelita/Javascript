function swap( A, i, j) {
    var temp = A[i]
    A[i] = A[j]
    A[j] = temp

}
function selectionSort( A ) {    
    var min

    for (var i=0; i < A.length; i++){
        // set minimum to this position
        min = i
        //check the rest of the array to see if anything is smaller
        for ( j=i+1; j < A.length; j++ ){
            if (A[j] < A[min]){
                min = j
            }
        }
        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(A, i, min)
        }
    }
    return A
    }

console.log( selectionSort([6,1,23,4,2,3]) )  // [1, 2, 3, 4, 6, 23]