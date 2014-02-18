//fizzbuzz extended

/*

  num : number to count to;
  refs : { divide-by : "output string" }

*/

var refs = {
  3: "Fizz",
  5: "Buzz",
  9: "Sivv",
  11: "Clutch",
  13: "Pop"
}

var fizzBuzzArr = function(max, refs){

  for(var i = 1; i<=max; i++){
    var fbOutput = "";
    var number = i;
    var refArr = Object.keys(refs);

    for(var j = 0; j<refArr.length; j++){
      if(i%refArr[j] == 0){
        fbOutput = fbOutput + refs[refArr[j]];
        number = "";
      }
    }

    fbOutput = number + fbOutput;

    console.log(fbOutput);
  }
}
