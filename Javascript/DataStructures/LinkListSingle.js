// Esta idea de una estructura en forma de objetos discretos unidos por una linea, imaginaria en este caso, lo vemos desde que jugamos coleadas hasta en el metro. 
// Asi es un objeto siendo señalado por otro, además tienen un orden hay un primer elemento, y asi hasta n elemetos. Podemos insertar en el medio de los objetos, 
// podemos reemplazar el primero con otro elemento nuevo o simplemente colocarlos al final.
// Estas listas pueden ser simples es decir solo apuntan en una sola dirección, pero también dobles para que apunten den ambas direcciones, en todo caso la realidad la definimos 
// de acuerdo a nuestros prejuicios así que en teoría podría apuntar a un numero infinito de listas en ambas direcciones o incluso de manera circular, pero comencemos con el 
// caso mas sencillo, entre comillas. 

class Nodo{
    constructor( elemento ){
        this.elemento = elemento
        this.siguiente = null        
    }
}

class SingleLL{
    constructor(){
        this.inicio = null
        this.tamaño = 0
        this.vector = []
    }
    // Esta operacion es O( 1 ) porque no hay que recorrer nada
    anteponer(elemento){
        if( this.inicio === null){
            this.inicio = new Nodo( elemento )            
        }else{            
            var nodo_nuevo = new Nodo( elemento )
            nodo_nuevo.siguiente = this.inicio
            this.inicio = nodo_nuevo            
        }
        this.tamaño += 1 
    }

    // Esta operacion en el peor de los casos es o( n ) porque hay que recorrer toda la lista.
    adjuntar(elemento){
        if( this.inicio == null){
            this.inicio = new Node( elemento )
        }else{
            var nodo_actual = this.inicio
            var nodo_anterior = null
            while( nodo_actual ){
                nodo_anterior = nodo_actual
                nodo_actual = nodo_actual.siguiente            
            }
            var nodo_nuevo = new Nodo( elemento )
            nodo_anterior.siguiente = nodo_nuevo
        }        
        this.tamaño += 1 
    }

    // Esta operacion en el peor de los casos es o( n ) porque habría que recorrer toda la lista.
    insertar( elemento, nodo){
        if( this.inicio == null){
            this.inicio = new Node( elemento )
        }else{
            var nodo_actual = this.inicio
            var nodo_anterior = null
            while( nodo_actual && nodo_actual.elemento != nodo){
                nodo_anterior = nodo_actual
                nodo_actual = nodo_actual.siguiente
            }
            var nuevo_nodo = new Nodo( elemento )
            nodo_anterior.siguiente = nuevo_nodo
            nuevo_nodo.siguiente = nodo_actual
        }
    }
    
    eliminar( nodo ){
        if( this.inicio.elemento == nodo){
            this.inicio = this.inicio.siguiente            
        }else{
            var nodo_actual = this.inicio
            var nodo_anterior = null
            while( nodo_actual && nodo_actual.elemento != nodo){
                nodo_anterior = nodo_actual
                nodo_actual = nodo_actual.siguiente
            }            
            nodo_anterior.siguiente = nodo_actual.siguiente            
        }
    }

    buscar( elemento ){
        if( this.inicio == null){
            console.log( "No hay elementos")
        }else{
            var nodo_actual = this.inicio
            while( nodo_actual && nodo_actual.elemento != elemento){
                nodo_actual = nodo_actual.siguiente
            }
            if( nodo_actual != null){
                console.log( nodo_actual.elemento)                
            }else{
                console.log( "No existe ese elemento")   
            }
            
        }
    }

    imprimir(){
        if( this.inicio != null){
            var nodo_actual = this.inicio
            while( nodo_actual ){
                this.vector.push( nodo_actual.elemento )
                nodo_actual = nodo_actual.siguiente
            }
        }
        console.log( this.vector)
    }        

}

sll = new SingleLL()
sll.anteponer( "marge" )
sll.anteponer( "homer" )
sll.insertar( "bart", "lisa" )
sll.adjuntar( "lisa" )
sll.adjuntar( "maggie" )
//sll.imprimir()
sll.eliminar( "maggie" )
sll.eliminar( "bart" )
sll.eliminar( "homer" )
sll.imprimir()
sll.buscar("lisa")
sll.buscar("apu")
