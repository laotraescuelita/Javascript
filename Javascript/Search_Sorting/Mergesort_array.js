// Aqui vamos a separar el array por mitades hasta que en cada sepración quede solo un elemnto.
// al unirlos los ordenaremos.

function merge( izquierda, derecha ){
    var nuevo_vector = []
    var indice_izquierda = 0 
    var indice_derecha = 0 

    while ( indice_izquierda < izquierda.length && indice_derecha < derecha.length){
        if( izquierda[indice_izquierda] < derecha[indice_derecha]){
            nuevo_vector.push( izquierda[indice_izquierda++])
        }else{
            nuevo_vector.push( derecha[indice_derecha++])
        }
    }

    var restos_izquierda = izquierda.slice( indice_izquierda )
    var restos_derecha = derecha.slice( indice_derecha)

    return  nuevo_vector.concat( restos_izquierda).concat( restos_derecha)

}

function mergeSort( vector ) {    
    if( vector.length < 2){
        return vector
    }
    
    var punto_medio = Math.floor(( vector.length )/2)
    var izquierda = vector.slice(0, punto_medio)
    var derecha = vector.slice( punto_medio )
   
   return merge( mergeSort( izquierda ), mergeSort( derecha ));
   }
   
resultado = mergeSort([6,1,23,4,2,3]); // [1, 2, 3, 4, 6, 23]
console.log( resultado )
