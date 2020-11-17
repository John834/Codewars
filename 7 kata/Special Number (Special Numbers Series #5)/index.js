/* 

	Description

	A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

	Given a number determine if it special number or not .

	Notes

	The number passed will be positive (N > 0) .

	All single-digit numbers with in the interval [0:5] are considered as special number.

	

	specialNumber(2) ==> return "Special!!"

	specialNumber(9) ==> return "NOT!!"
    	
*/




function specialNumber(n){
  return ((n+'').match(/[0-5]/g) || []).length === (n+'').length ? "Special!!" : "NOT!!"
}