// Al ir a las tortillas puedes escuhar el ruido de la maquina. Y miras como un contenedor recibe la masa, 
// devuelve la misma masa con la figura de la tortilla, la calienta y la entrega. Cuando la entrega es cuando 
// podemos apreciar esta estructura de datos en la vida real. 
// Una tortilla después de otra se acumulan para formar una pila. En Logistica se le conoce como un método 
// LIFO por sus siglas en ingles, ultimas entradas primeras salidas. 
// Ahora apliquemos al estructura.

class Stack {
    constructor(){
        this.vector = []
        this.tamaño = 0 
    }

    // mostrar si el vector esta vacío.
    estavacio(){
        if( this.tamaño == 0){
            console.log( "La pila esta vacía.")
        } else{
            console.log( "El tamaño de la  pila es: this.tamaño" )
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
    eliminar(){
        if( this.vector.length == 0){
            console.log("No hay elementos para eliminar")
        }else{
            return this.vector.pop()
            this.tamaño -= 1 
        }
    }

    buscar( elemento ){
        var i = 0 
        while( i <= this.tamaño ){
            if( elemento == this.vector[i]){
                console.log( "El", elemento , "si existe en el vector")
                return
            }            
            i++
        }
        console.log( "El" , elemento, "no existe en el vector")
    }

}


// Por la forma de la estrucutura el insertar elementos y eliminarlos se hace en tiempo constante O( 1 ).
// La busqueda en el peor de los casos es O( n ). 
var s = new Stack()
console.log( s.estavacio())
s.adjuntar(1)
s.adjuntar(2)
s.adjuntar(3)
console.log( s.punta() ) 
console.log( s.vector )
console.log( s.eliminar())
console.log( s.vector )
s.buscar( 4 )
