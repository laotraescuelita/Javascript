function binarySearch(A,item){
    var i = 0
    var j = A.length-1

    while( i <= j){
        var mid = Math.floor( ( i+j ) /2)
        
        if ( A[mid] == item) {
            return mid
        } else if ( item > A[mid]) {
            i = mid
        } else {
            j = mid
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4], 4)) // true
console.log(binarySearch([1,2,3,4], 5)) // -1