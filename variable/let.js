let x = 10;
// let x = 20; // ERROR! Cannot redeclare.
x = 20; // Allowed! Value updated.

if (true) {
    let y = 30;
}
// console.log(y); // ERROR! 'y' only exists inside the if-block.
