const fibonacci = function(n) {

    let fib=1;
    let lastFib=1;

    if(n<0){
        return 'OOPS';
    }

    else if(n===1 || n===2){
        return fib;
    }

    
    
    else{
        for (let index = 3; index <=n; index++)
         {
            let temp=lastFib;
            lastFib=lastFib+fib;
            fib=temp;
            
            }
            return lastFib;
    }
};

// Do not edit below this line
module.exports = fibonacci;
