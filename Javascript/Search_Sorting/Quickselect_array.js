//Es la misma idea que en quick sort, pero esto es una busqueda.

function seleccion( vector, izquierda, derecha, elemento){
    var p = partition( vector, izquierda, derecha)
    if( p ==( elemento-1 )){
        return vector[p]
    }else if( p>( elemento-1 ) ){
        return seleccion( vector, izquierda, p-1, elemento)
    }else{
        return seleccion( vector, p+1, derecha, elemento)
    }
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

function mediana(vector) {
    return seleccion(vector,0,vector.length-1, Math.floor(vector.length/2))
    }

var vector = [1,3,3,-2,3,14,7,8,1,2,2];
// sorted form: [-2, 1, 1, 2, 2, 3, 3, 3, 7, 8, 14]

console.log( seleccion(vector,0,vector.length-1,5) ) // 2
// 2 - Porque es el quinto elemento mas pequeño.
console.log( seleccion(vector,0,vector.length-1,10) ) // 7
// 7 - porque es el decimo elemento mas pequeño

