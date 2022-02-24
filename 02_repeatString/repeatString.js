const repeatString = function(string,num) {
    let returnString = string;
    if (num == 0 || string == undefined){
        return "";
    } else if (num < 0){
        return "ERROR"
    } 
    for (i = 1; i < num; i++){
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
