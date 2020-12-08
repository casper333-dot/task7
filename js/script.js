function reverseThisString(string) {
    const revArray = [];
    const length = string.length - 1;

    for (let i = length; i >= 0; i--) {
        revArray.push(string[i]);
    }

    return revArray.join('');
}
console.log('##Reverses String##')
console.log(reverseThisString('Hello'))

function swapCase(string) {

    var swap = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= 'a' && string[i] <= 'z') {
            swap += string[i].toUpperCase();
        }

        else if (string[i] >= 'A' && string[i] <= 'Z') {
            swap += string[i].toLowerCase();

        }

    }

    console.log(swap);
}
console.log('##Swapcase##')
swapCase('Hello World')

console.log("##To Celsius##");

function toCelcius(array) {
    return array.map(
        function (temp) {
            return (temp - 32) * 5 / 9
        }
    );
}

var array = [23, 32, 41, 50, 59];
var result = toCelcius(array);
console.log(result);

console.log('##Booleans##')
function passOrFail(array) {
    arr = []
    for (i = 0; i < array.length; i++) {
        if (arr[i] >= 75)
            arr[i] = true;
        else
            arr[i] = false;
    }
    console.log(arr)
}
passOrFail([20, 30, 50, 80, 90, 100])

console.log("##cardinalNumbers##");

function germanNumbers() {

    arr = []

    const cardinalNumbers = [2, 3, 4, 5, 6];

    const germanNumbers = ['zwei', 'drei', 'vier', 'funf', 'sechs'];

    for (i = 0; i < 5; i++) {

        arr[i] = cardinalNumbers[i] + " is " + germanNumbers[i];
    }


    console.log(arr);
}

germanNumbers();