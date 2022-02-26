// En el mismo caso de la tortilleria. Mientras miras como se apilan las torillas. Tú estas haciendo en la cola o fila. 
// Esperas que te atiendan como fueron llegando. Ese método en logistica es conocido como FIFO por sus siglas en ingles.
// Primeras entradas primeras salidas. 
// Ahora apliquemos al estructura.

class Queue {
    constructor(){
        this.vector = []
        this.tamaño = 0 
    }

    // mostrar si el vector esta vacío.
    estavacio(){
        if( this.tamaño == 0){
            console.log( "La cola esta vacía.")
        } else{
            console.log( "El tamaño de la  cola es: this.tamaño" )
        }
    }

    // Ir adjuntando elementos uno detras del otro.
    adjuntar(elemento){
        this.vector.push( elemento)
        this.tamaño += 1 
    }

    // mostrar el ultimo elemento que se ha ingresado
    punta(){
        if( this.vector.length == 0){
            console.log("No hay elementos para mostrar")
        }else{
            return this.vector[ this.vector.length - 1]
        }
        
    }

    // eliminar el ultimo elemento 
    eliminar( ){        
        if( this.vector.length == 0){
            console.log("No hay elementos para eliminar")
        }else{            
            this.tamaño -= 1
            return this.vector.shift(  )
            
        }
    }

    buscar( elemento ){
        var i = 0 
        while( i <= this.tamaño ){
            if( elemento == this.vector[i]){
                console.log( "El", elemento , "si existe en la cola")
                return
            }            
            i++
        }
        console.log( "El" , elemento, "no existe en la cola")
    }

}

// Por la forma de la estrucutura el insertar elementos y eliminarlos se hace en tiempo constante O( 1 ).
// La busqueda en el peor de los casos es O( n ). 
var q = new Queue()
console.log( q.estavacio())
q.adjuntar(1)
q.adjuntar(2)
q.adjuntar(3)
console.log( q.punta() ) 
console.log( q.vector )
console.log( q.eliminar())
console.log( q.vector )
q.buscar( 4 )
console.log( q.tamaño)