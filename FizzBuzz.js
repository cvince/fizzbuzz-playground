//fizzbuzz with line breaks
var fizzbuzz = function(num){

  for (var i = 1; i<=num; i++){

    var fizzBuzzStr = "";
    var number = i;

    if(i%3==0){
      fizzBuzzStr = fizzBuzzStr + 'Fizz';
      number = "";
    }
    if(i%5==0){
      fizzBuzzStr = fizzBuzzStr + 'Buzz';
      number = "";
    }

    fizzBuzzStr = number + fizzBuzzStr;

  console.log(fizzBuzzStr);

  }
}
