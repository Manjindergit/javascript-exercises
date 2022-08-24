const reverseString = function(text) {
    const myArr=text.split("");
    console.log(myArr);
    let result="";
    for (let i=myArr.length-1; i>=0; i--){
        result+=myArr[i]; 

    }

       
    
    return result;
};

// Do not edit below this line
module.exports = reverseString;
