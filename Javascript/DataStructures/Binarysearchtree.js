// Imaginate que el t-800 solo tuviera algoritmos como "Link lists", "Stacks", "Queues". Lo difícil que le hubiera
// sido encontrar a Sarah Connor en el directorio teléfonico. Pero como los seres humanos no comenzamos a buscar 
// desde la A hasta la Z. Vamos realizando particiones, existe esa palabra en español, así que si es Connor buscamos en la C, 
// despues en la Co, Coa, Cos, Con y ahí hasta que localizamod a Sarah Conner y la ayudamos. Bueno para eso 
// existe otra estrucutura llamada en ingles "Binary search tree".
// Implementemos el algortitmo. 

class Nodo{
    constructor( elemento ){
        this.elemento = elemento
        this.izquierda = null
        this.derecha = null
    }
}

class BST{
    constructor(){
        this.raiz = null
        this.tamaño = 0 
    }

    insertar(elemento){
        if( this.raiz == null){
            this.raiz = new Nodo( elemento )
        }else{
            this.insertar_(elemento, this.raiz )
        }
        this.tamaño+=1
    }

    insertar_( elemento, nodo){
        var nodo_actual = nodo
        if ( elemento < nodo_actual.elemento){
            if( nodo_actual.izquierda){
                this.insertar_( elemento, nodo_actual.izquierda)
            }else{
                nodo_actual.izquierda = new Nodo( elemento)
            }
        }
        if ( elemento > nodo_actual.elemento){
            if( nodo_actual.derecha){
                this.insertar_( elemento, nodo_actual.derecha)
            }else{
                nodo_actual.derecha = new Nodo( elemento)
            }
        }
        
    }

    eliminar(elemento){
        if( this.raiz == null){
            return
        }else{
            this.eliminar_( elemento, this.raiz)
        }
        this.tamaño-=1
    }

    eliminar_(elemento, nodo){
        var nodo_actual = nodo
        if( elemento < nodo_actual.elemento){
            nodo_actual.izquierda = this.eliminar_(elemento, nodo_actual.izquierda)
        }
        else if( elemento > nodo_actual.elemento){
            nodo_actual.derecha = this.eliminar_( elemento, nodo_actual.derecha )
        }else{
            if( !nodo_actual.izquierda && !nodo_actual.derecha ){
                return null
            }else if ( !nodo_actual.izquierda){
                nodo_actual = nodo_actual.derecha
                return nodo_actual
            }else if( !nodo_actual.derecha){
                nodo_actual = nodo_actual.izquierda
                return nodo_actual
            }else{
                var nodo_temporal = this.encontrarminimo( nodo_actual.derecha)
                nodo_actual.elemento = nodo_temporal.elemento
                nodo_actual.derecha = this.eliminar_( nodo_actual.derecha, nodo_temporal.elemento)
                return nodo_actual
            }
        }
        
        return nodo_actual
        
    }

    encontrarminimo( nodo ){
        while( nodo.izquierda){
            nodo = nodo.izquierda
        }
        return nodo
    }

    recorrerenorden(){
        if( this.raiz == null ){
            return        
        }else{
            this.recorrerenorden_( this.raiz )
        }
    }

    recorrerenorden_( nodo ){
        var nodo_actual = nodo
        if( nodo_actual ){
            console.log( nodo_actual.elemento )
            this.recorrerenorden_( nodo_actual.izquierda)
            this.recorrerenorden_( nodo_actual.derecha)
        } 
    }

    recorrerenpostorden(){
        if( this.raiz == null ){
            return        
        }else{
            this.recorrerenpostorden_( this.raiz )
        }
    }

    recorrerenpostorden_( nodo ){
        var nodo_actual = nodo
        if( nodo_actual ){            
            this.recorrerenpostorden_( nodo_actual.izquierda)
            this.recorrerenpostorden_( nodo_actual.derecha)
            console.log( nodo_actual.elemento )
        } 
    }

    recorrerenpreorden(){
        if( this.raiz == null ){
            return        
        }else{
            this.recorrerenpreorden_( this.raiz )
        }
    }

    recorrerenpreorden_( nodo ){
        var nodo_actual = nodo
        if( nodo_actual ){            
            this.recorrerenpreorden_( nodo_actual.izquierda)
            console.log( nodo_actual.elemento )
            this.recorrerenpreorden_( nodo_actual.derecha)
            
        } 
    }

}

//  Para un arbol balanceado esto es  O(log2(n))
// Un árbol no balanceado es O(n) porque se vuelve un "link list"

bst = new BST()
bst.insertar( 20 )
bst.insertar( 10 )
bst.insertar( 30 )
bst.recorrerenorden()
console.log( bst.tamaño )
console.log("")
bst.recorrerenpostorden()
console.log("")
bst.recorrerenpreorden()
bst.eliminar( 30 )
console.log("")
bst.eliminar( 20 )