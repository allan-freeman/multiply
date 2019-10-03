module.exports = function multiply(first, second) {
  // your solution  
let first_num = first.split('').reverse();
let second_num = second.split('').reverse();
let mult_result = [];

for (let i = 0; i < first_num.length; i++) {
  for (let j = 0; j < second_num.length; j++) {
    let m = first_num[i] * second_num[j];
    mult_result[i + j] = (mult_result[i + j]) ? mult_result[i + j] + m : m;
  }  
}

for (let i = 0; i < mult_result.length; i++) {
  let num = mult_result[i] % 10;
  let move = Math.floor(mult_result[i] / 10);
  mult_result[i] = num;

  if (mult_result[i + 1])
    mult_result[i + 1] += move;
  else if (move != 0)
    mult_result[i + 1] = move;
}

return mult_result.reverse().join('');     
}

