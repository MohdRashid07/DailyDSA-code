
// JavaScript program to find the 
// sum of natural numbers 
// up to n using recursion 

// Returns sum of first 
// n natural numbers 
function recurSum(n) 
{ 
	if (n <= 1) 
		return n; 
	return n + recurSum(n - 1); 
} 

// Driver code 
let n = 7; 
console.log(recurSum(n)); 

// This code is contributed by mohan 

