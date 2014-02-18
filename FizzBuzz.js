//fizzbuzz with line breaks
var fizzbuzz = function(num){

  var fizzBuzzStr = "";

  for (var i = 1; i<=num; i++){
    if(i%3!=0 && i%5!=0){
      fizzBuzzStr = fizzBuzzStr + i.toString() + '\n';
    }
    if(i%5==0 && i%3==0){
      fizzBuzzStr = fizzBuzzStr + 'FizzBuzz' + '\n';
    }
    if(i%3==0 && (i%5!=0 || i%3!=0)){
      fizzBuzzStr = fizzBuzzStr + 'Fizz' + '\n';
    }
    if(i%5==0 && (i%5!=0 || i%3!=0)){
      fizzBuzzStr = fizzBuzzStr + 'Buzz' + '\n';
    }
  }

  console.log(fizzBuzzStr);
}
