var x = 10;
var x = 20; // Allowed! No error.

if (true) {
    var y = 30; 
}
console.log(y); // Prints 30! 'var' leaked out of the if-block.
