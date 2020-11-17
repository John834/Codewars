/* 

	Description

	Create a function called toTime() that takes an integer argument of seconds and converts the value 
	into a string describing how many hours and minutes comprise that many seconds.

	Any remaining seconds left over are ignored.


    	
*/


function toTime(seconds) {
  let hour = Math.trunc(seconds / 3600)
  let minute = Math.trunc((seconds - (3600 * hour)) / 60)
  return `${hour} hour(s) and ${minute} minute(s)`
}
