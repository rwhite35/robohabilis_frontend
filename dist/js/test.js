/**
 * Return a value between 10 and 20.
 * Given the input values are b=4, x=2, y=8 
 * c is double and the product of Math.abs(b) but less than 10.00
 * Both ternary solutions calculate the same result, 
 * however the or operator is cleaner.  
 */
let x = 2;
let y = 8;
const a = function(b) { 
	return function(c) {
		return x + y + Math.abs(b) + c
		+ ( (c >= 6 || c <= 2 ) ? -x : 0 ); // simplified
		/* + ( (c >= 6 ) ? -x : (c <= 2 ) ? -x : 0 ); works submittted */ 
	}
};

const fn = a(x);
x = 4;
console.log("fn random number is " + fn(Math.random() * 10));


/**
 * Scale width and height to a max dimension with at least
 * two sides touching the maxdim.  
 * The max dimension represents the outside max value for the square/rectangle. 
 * To scale the width and height proportionately, apply the scale
 * derived from dividing the w|h bigger value by the maxdim. 
 * that will produces a multiplier. For example 20/5=4.  
 * 4x5=20h & 4x4=16w  At least two sides touch the maxdim.  
 */
var maxdim = 20;
var width = 4;
var height = 5;

function scaleImage(width, height, maxdim) {
	  var scale = maxdim / ( ( height > width ) ? height : width );
	  return [ 
		  scale * width, 
		  scale * height 
	];
}

var scaled = scaleImage( width, height, maxdim );
console.log( width  + ' width scales to ' + scaled[0] + ' and ' 
		+ height + ' height scales to ' + scaled[1] + ' for a maxdim of ' + maxdim);