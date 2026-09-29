function isPalindrome(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return false;
    }
    str=str.toLowerCase().replace(/[^a-z0-9]/g,"");
    const reversed =str.split('').reverse().join('');
    console
.log(reversed);
    return str===reversed;
}
const word="madam madaam";
console.log(isPalindrome(word)); // true