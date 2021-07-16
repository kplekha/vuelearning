var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
var names = ['krishna', 'lekha', 'panthus'];
names.push('kishor');
names.forEach(function (name) { console.log(name.length); });
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
ninja.belt = 'brown';
console.log(ninja);
var test = 'abc';
console.log(test);
var mixed = [];
mixed.push('mixed');
mixed.push(true);
console.log(mixed);
/*Function*/
var rectangleperimeter = function (length, width) {
    return 2 * (length + width);
};
var handleClick = function () {
    console.log("Clicked!");
    var rectlen = "0";
    rectlen = document.getElementById("length").value;
    var rectwidth = "0";
    rectwidth = document.querySelector("#width").valueAsNumber;
    console.log("rectlen", rectlen);
    console.log("rectwidth", rectwidth);
    console.log("Perimeter for input values", rectangleperimeter(parseInt(rectlen), rectwidth));
    event.preventDefault();
};
console.log("Perimeter", rectangleperimeter(5, 10));
//console.log("rectlen",rectlen);
//console.log("rectwidth",rectwidth);
var button = document.querySelector("#perimeter");
button.addEventListener("click", handleClick);
//console.log("Perimeter for input values",rectangleperimeter(parseInt(rectlen),parseInt(rectwidth)));
