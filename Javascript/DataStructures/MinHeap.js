
class Minheap{
    constructor(){
        this.vector = []
        this.tamaño = 0 
    }
    
    obtenerelindicedelpadre( indice ){
        return Math.floor( ( indice-1)/ 2 )
    }

    obtenerelindicedelhijoizquierdo( indice ){
        return 2 * indice + 1
    }

    obtenerelindicedelhijoderecho( indice ){
        return 2 * indice + 2
    }

    tienepadre( indice ){
        return this.obtenerelindicedelpadre( indice ) >= 0 
    }

    tienenhijoderecho( indice ){
        return this.obtenerelindicedelhijoderecho( indice ) < this.tamaño
    }

    tienehijoizquierdo( indice ){
        return this.obtenerelindicedelhijoizquierdo( indice ) < this.tamaño
    }

    padre( indice ){
        return this.vector[ this.obtenerelindicedelpadre( indice ) ]
    }

    hijoizquerdo( indice ){
        return this.vector[ this.obtenerelindicedelhijoizquierdo( indice )]
    }

    hijoderecho( indice ){
        return this.vector[ this.obtenerelindicedelhijoderecho( indice) ]
    }

    cambiarposicion( indice1, indice2){
        let temporal = this.vector[ indice1 ]
        this.vector[ indice1 ] = this.vector[ indice2 ]
        this.vector[ indice2 ] = temporal
    }

    insertar( elemento ){
        this.vector[ this.tamaño ] = elemento
        this.tamaño +=1
        //this.heapify() 
        this.heapifyhaciaarriba( this.tamaño - 1 ) 
    }

    heapifyhaciaarriba( indice ){
        //let indice = this.tamaño-1
        while( this.tienepadre( indice ) && this.padre( indice ) > this.vector[indice]){
            this.cambiarposicion( this.obtenerelindicedelpadre( indice ), indice )
            //indice = this.obtenerelindicedelpadre( indice )
            this.heapifyhaciaarriba( this.obtenerelindicedelpadre( indice ))
        }
    }

    eliminarvalorminimo(){
        if( this.tamaño == 0){
            throw new Error( "El vector esta vacío")
        }
        let elemento = this.vector[0]
        this.vector[0] = this.vector[ this.tamaño -1 ]
        this.tamaño -= 1 
        this.heapifyhaciaabajo()
        //this.heapifyhaciaabajo(0)
        return elemento
    }

    heapifyhaciaabajo(){
        let indice = 0        
        while( this.tienehijoizquierdo( indice )){
        let hijomaspequeño = this.obtenerelindicedelhijoizquierdo( indice )
        if( this.tienenhijoderecho( indice ) && this.hijoderecho( indice ) < this.hijoizquerdo( indice )){
            hijomaspequeño = this.obtenerelindicedelhijoderecho( indice )
        }
        if ( this.vector[ indice ] < this.vector[ hijomaspequeño]){
            break
        }else{
            this.cambiarposicion( indice, hijomaspequeño)
            indice = hijomaspequeño
        }
        }
        
        /*
        let maspequeño = indice
        if( this.tienehijoizquierdo( indice ) && this.vetor[ maspequeño] > this.hijoizquerdo(indice) ){
            maspequeño = this.obtenerelindicedelhijoizquierdo( indice )
            }
        if ( this.tienenhijoderecho( indice ) && this.vector[ maspequeño] > this.hijoderecho( indice )){
            maspequeño = this.obtenerelindicedelhijoderecho( indice )
        }
        if( maspequeño != indice ){
            this.cambiarposicion( indice, maspequeño)
            this.heapifyhaciaabajo( maspequeño)
        }*/
    }
    
}

heap = new Minheap()
heap.insertar( 30 )
heap.insertar( 20 )
heap.insertar( 10 )
heap.insertar( 0 )
console.log( heap.vector )
heap.eliminarvalorminimo()
console.log( heap.vector )