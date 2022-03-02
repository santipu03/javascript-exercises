const palindromes = function (string) {
    const reverse = string.split("");
    const filteredArray = reverse.filter(item => item.toLowerCase() != item.toUpperCase());
    const original = filteredArray.join("").toLowerCase();
    const result = filteredArray.reverse().join("").toLowerCase();

    return (original === result);
};

// Do not edit below this line
module.exports = palindromes;
