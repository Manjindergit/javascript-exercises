const sumAll = function(i,j) {
    let sum = 0;
    let index;
    let end;
    if(!Number.isInteger(i)||!Number.isInteger(j)||i<0||j<0) {
        return 'ERROR';
    }

    else if(i<j){
        index=i;
        end=j
    }
    else
    {
        index=j;
        end=i
    }

    for (index; index<=end; index++) {
        sum+=index;
        
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
