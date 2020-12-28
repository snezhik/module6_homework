
function printNumbers(num1, num2){
    const intervalId = setInterval(function () {
        if (num1 > num2){
            clearInterval(intervalId);
        } else {
            console.log(num1++);
        }
     }, 1000); 
}