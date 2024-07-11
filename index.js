'use stict';
const number = 21234;
const absNumber = Math.round(Math.abs(number));
const numberString = absNumber.toString();

/* verify if:
num has 5 digits 
*/

if (numberString.length === 5){
const splitedDigits = numberString.split("").join(' ');
console.log(splitedDigits);
}else{
console.log('Five digits number only!');
};