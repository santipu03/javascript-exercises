const removeFromArray = function(array, ...remove) {

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < remove.length; j++){
            if (array[i] === remove[j]){
                array.splice(i,1);
                i--;
            }
        }
            
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
