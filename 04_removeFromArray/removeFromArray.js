const removeFromArray = function(arr, ...args) {
    let normalArray = args;
   
        for (let z = 0; z < normalArray.length; z++) {
            arr = arr.filter(word => word!==normalArray[z]);
       
                
        }
        
    console.log("Final",arr);
    return arr;
};



// Do not edit below this line
module.exports = removeFromArray;
