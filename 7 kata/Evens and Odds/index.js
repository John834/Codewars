/* 

	Description

	This kata is about converting numbers to their binary or hexadecimal representation:

		If a number is even, convert it to binary.
		If a number is odd, convert it to hex.



	Kata Link:
    	https://www.codewars.com/kata/even-or-odd
    	
*/




function evensAndOdds(num){
  return num % 2 ? (+`${num}`).toString(16) : parseInt(num).toString(2);
}