const palindromes = function (a) {
    console.log(a.split("").reverse().join(""));
    if(a===a.split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
