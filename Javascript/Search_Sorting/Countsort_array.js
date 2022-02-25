
function contador( vector ) {
    const hash = {}
    const contar_vector = []
    for(var i=0; i<vector.length; i++){
        if(!hash[vector[i]]){
            hash[vector[i]] = 1;
        }else{
            hash[vector[i]]++;
        }
    }
    
    for(var key in hash){
        // for any number of _ element, add it to array
        for(var i=0;i<hash[key];i++) {
            contar_vector.push(parseInt(key));
        }
    }
    
    return contar_vector;
}

resultado = contador([6,1,23,2,3,2,1,2,2,3,3,1,123,123,4,2,3]); // [1, 2, 3, 4, 6, 23]
console.log( resultado )