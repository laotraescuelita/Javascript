// Quick Sort se tiene que escojer un elemento como pivote y repartir el vector a partir de él.
// Elementos pequeños de un lado y elementos mas grnades del otro hasta que se haya ordenado. 

// Se recibe el vector
function quicksort( vector ){
    return quicksortayudante( vector, 0, vector.length-1)
}

// Se llama de manera recursiva al algoritmo que divide y acomoda los valores
function quicksortayudante( A, izquierda, derecha){
    var indice
    if( A.length > 1 ){
        indice = partition( A, izquierda, derecha )

        if( izquierda < indice-1){
            quicksortayudante(A, izquierda, indice-1)
        }

        if( indice < derecha ){
            quicksortayudante( A, indice, derecha)
        }
    }
    return A 
}

// Esta función nos ayuda a encontrar el valor de la izquierda que sirve como indice. 
function partition(A, izquierda, derecha){
    var pivote = A[ Math.floor(( izquierda+derecha)/2 ) ]
    while ( izquierda <= derecha){
        while ( pivote > A[izquierda]){
            izquierda++
        }
        while( pivote < A[derecha]){
            derecha--
        }
        if( izquierda <= derecha){
            var temp = A[izquierda]
            A[izquierda] = A[derecha]
            A[derecha] = temp
            izquierda++
            derecha--
        }
    }
    return izquierda
}

// Y el resultado es un algoritmo que ordena, aunque el nombre en ingles es quick sort no es el mas veloz

resultado = quicksort([6,1,23,4,2,3] ) // [1, 2, 3, 4, 6, 23]
console.log(  resultado )