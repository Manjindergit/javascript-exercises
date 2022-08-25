const getTheTitles = function(obj) {
    let arr=[];

    for (let index = 0; index < obj.length; index++) {
        arr.push(obj[index].title);
        
    }

    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
