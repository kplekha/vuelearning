const character = 'mario';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});

let names =['krishna','lekha','panthus'];
names.push('kishor');
names.forEach(name=> {console.log(name.length)});

let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
ninja.belt ='brown';
console.log(ninja);

let test : string ='abc';
console.log(test);

let mixed : (string|boolean)[] =[];
mixed.push('mixed');
mixed.push(true);
console.log(mixed);

/*Function*/
const rectangleperimeter = (length:number, width:number) => {
  return 2*(length+width);

}

const handleClick = () => {
  console.log("Clicked!");
  let rectlen :string = "0";
  rectlen= (document.getElementById("length") as HTMLInputElement).value;
  let rectwidth :string = "0";
  rectwidth = (document.getElementById("width") as HTMLInputElement).value;
  console.log("rectlen",rectlen);
  console.log("rectwidth",rectwidth);
  console.log("Perimeter for input values",rectangleperimeter(parseInt(rectlen),parseInt(rectwidth)));
  event.preventDefault();
}


console.log("Perimeter",rectangleperimeter(5,10));
//console.log("rectlen",rectlen);
//console.log("rectwidth",rectwidth);
const button = document.querySelector("#perimeter");
button.addEventListener("click", handleClick);
//console.log("Perimeter for input values",rectangleperimeter(parseInt(rectlen),parseInt(rectwidth)));
