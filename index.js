//1
// Declare num as parameter
// a conditional statement that checks for num less than 10 AND greater than 5

function betweenFiveAndTen(num){
  if(num >= 5 && num <= 10){
    return true;
  }else{
    return false;
  }
}
console.log(betweenFiveAndTen(8));

//2

function betweenTenAndThirty(num){
  if(num >= 10 && num <= 30){
    return true;
  }else{
    return false;
  }
}
console.log(betweenTenAndThirty(18));

//3
function betweenThirtyAndFifty(num){
  if(num >= 30 && num <= 50){
    return true;
  }else{
    return false;
  }
}
console.log(betweenThirtyAndFifty(5));


//4
function betweenThirtyFiftySeventy(num){
  if(num >= 0 && num <= 30){
    return true;
  }else if(num >= 50 && num <= 70){
    return true;
  }else{
      return false;
  }
}
console.log(betweenThirtyFiftySeventy(48))

//5
function betweenTwentyFiftySixty(num){
  if(num >= 0 && num <= 20){
    return true;
  }else if(num >= 50 && num <= 60){
    return true;
  }else{
      return false;
  }
}
console.log(betweenThirtyFiftySeventy(98))
//6
function betweenTenTwentyThirty(num){
  if(num >= 0 && num <= 10){
    return true;
  }else if(num >= 20 && num <= 30){
    return true;
  }else{
      return false;
  }
}
console.log(betweenTenTwentyThirty(16))