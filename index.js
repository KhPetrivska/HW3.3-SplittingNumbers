'use stict';
const number = prompt('Enter five-digit number.')

/* verify if:
num has 5 digits 
*/

if (number === null){
    alert('You canceled the input. Refresh the page and try again.');
}else if (!number.trim()){
    alert('The input is empty. Refresh the page and try again.');
}else if (isNaN(number)){
    alert('The input must contain numbers only! Refresh the page and try again.');
}else{
    //Is a number
    const absNumber = parseInt(Math.abs(number));
    const numberString = absNumber.toString();
    if (numberString.length === 5){
         const splitedDigits = numberString.split("").join(' ');
         console.log(splitedDigits);
    }else{
         alert('Five-digit number only! Refresh the page and try again.');
    };
};