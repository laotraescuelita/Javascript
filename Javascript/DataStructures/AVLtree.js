class Nodo{
    constructor( elemento){
        this.elemento = elemento
        this.izquierda = null
        this.derecha = null
        this.altura = 0
    }
}

class AVLtree{
    constructor(){
        this.raiz=null
        this.tamaño = 0 
    }

    nuevaaltura( nodo ){
        if( nodo == null){
            return -1
        }        
        return nodo.altura
    }

    balancear( nodo ){
        if( nodo == null ){
            return 0
        }
        return this.nuevaaltura(nodo.izquierda ) - this.nuevaaltura( nodo.derecha)
    }

    giraraladerecha( x ){
        const y = x.izquierda
        const yt = y.derecha
        y.derecha = x 
        x.izquierda = yt
        x.altura = Math.max( this.nuevaaltura( x.izquierda), this.nuevaaltura( x.derecha )) + 1 
        y.altura = Math.max( this.nuevaaltura( y.izquierda), this.nuevaaltura( y.derecha )) + 1 
        return y 
    }

    giraralaizquierda( x ){
        const y = x.derecha
        const yt = y.izquierda
        y.izquierda = x 
        x.derecha = yt
        x.altura = Math.max( this.nuevaaltura( x.izquierda), this.nuevaaltura(x.derecha)) + 1 
        y.altura = Math.max( this.nuevaaltura( y.izquierda), this.nuevaaltura(y.derecha)) + 1 
        return y 
    }

    insertar( elemento){
        if( this.raiz == null){
            this.raiz = new Nodo( elemento )
            console.log( "Se inserto el lemento" , elemento)
        }else{
            this.raiz = this.insertar_( elemento, this.raiz)
        }        
    }

    insertar_( elemento, nodo ){        
        if(nodo == null){
            return new Nodo( elemento )
        }

        if (elemento < nodo.elemento){
            nodo.izquierda = this.insertar_( elemento, nodo.izquierda)
        }else if(elemento > nodo.elemento) {
            nodo.derecha = this.insertar_( elemento, nodo.derecha)
        }
        this.tamaño+=1
        console.log(  "se inserto el elemento" , elemento)
        nodo.altura = Math.max( this.nuevaaltura( nodo.izquierda), this.nuevaaltura( nodo.derecha)) + 1 
        return this.validarAVL( nodo)        
    }

    eliminar( elemento ){
        if( this.raiz == null){
            return            
        }else{
            this.raiz = this.eliminar_( elemento, this.raiz)
        }
    }

    eliminar_( elemento, nodo){
        if( elemento < nodo.elemento && nodo.izquierda){
            nodo.izquierda = this.eliminar_( elemento, nodo.izquierda)
        }else if( elemento > nodo.elemento && nodo.derecha){
            nodo.derecha = this.eliminar_( elemento, nodo.derecha)
        }else{
            if( nodo.elemento == elemento){
                if( nodo.derecha && nodo.izquierda ){
                    let minimo = this.encontrarminimo( nodo.derecha)
                    nodo.elemento = minimo
                    nodo.derecha = this.eliminar_( minimo, nodo.derecha)
                }else if( nodo.izquierda ){
                    return nodo.izquierda
                }else if ( nodo.derecha){
                    return nodo.derecha
                }else{
                    return null
                }
            }
        }
        console.log(  "se elimino elemento" , elemento )
        nodo.altura  = Math.max( this.nuevaaltura( nodo.izquierda), this.nuevaaltura( nodo.derecha) ) + 1
        return this.validarAVL( nodo )
    }

    validarAVL( nodo ){
        if( this.balancear( nodo ) == 2 && this.balancear( nodo.izquierda ) >=0 ){
            return this.giraraladerecha( nodo )
        }else if ( this.balancear( nodo ) == 2 && this.balancear( nodo.izquierda) < 0 ){
            nodo.izquierda = this.giraralaizquierda( nodo.izquierda )
            return this.giraraladerecha( nodo )
        }else if( this.balancear( nodo ) == -2 && this.balancear( nodo.derecha) <= 0 ) {
            return this.giraralaizquierda( nodo )
        }else if( this.balancear( nodo ) == -2 && this.balancear( nodo.derecha ) > 0 ){
            nodo.derecha = this.giraraladerecha( nodo.derecha)
            return this.giraralaizquierda( nodo )
        }
        return nodo
    }

    imprimirenorden( ){
        if( this.raiz == null){
            return
        }else{
            this.imprimirenorden_( this.raiz )
        }
    }

    imprimirenorden_( nodo ){
        if ( nodo != null ){
            console.log( nodo.elemento, nodo.altura)
            this.imprimirenorden_( nodo.izquierda )
            this.imprimirenorden_( nodo.derecha )
        }
    }
}

avl = new AVLtree()
avl.insertar( 20 )
avl.insertar( 30 )
avl.insertar( 10 )
avl.imprimirenorden()
avl.eliminar( 10 )
avl.imprimirenorden()
