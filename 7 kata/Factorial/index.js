/* 

	Description

		Yor task is to write function factorial

		https://en.wikipedia.org/wiki/Factorial
    	
*/




function factorial(n){
  let fact = 1
  for(let i = 0; i < n; i++) {
    fact += fact * i
  }
  return fact
}
