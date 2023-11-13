//car cost 40$ per day 
//if you rent for 7 days you get 50$ off
//if you rent for 3 days you get 20$ off


//solution 1
function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
  }

// solution 2   
function rentalCarCost(d) {
    const result = d * 40;
    return d >= 7 ? result - 50 : d >= 3 ? result - 20 : result;
  }
 // solution 3 
 function rentalCarCost(d) {
    var sum = 40 * d;
    
    if (d >= 3) sum -= 20;
    if (d >= 7) sum -= 30;
    
    return sum;
  } 