function myMutation(arr) {
    var str = arr[0].toLowerCase();
    var str1 = arr[1].toLowerCase();

    for (var i = 0; i < str1.length; i++) {
        if (str.indexOf(str1[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));

module.exports = myMutation;
