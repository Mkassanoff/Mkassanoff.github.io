const myCar = new Object();
myCar.color = 'Gray';
myCar.make = 'Mazda';
myCar.model = "CX-5";
myCar.year = "2017";

//general syntax: object.property = value;

console.log(myCar.make);

//A second way of defining an object
const mySecondCar = {
  color: 'Blue',
  make: 'Ford',
  model: 'Ranger',
  year: '2020',

}

console.log(mySecondCar.drive);
console.log(myCar['make']);

{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
function populateHeader(x){
const header = document.querySelector('header');
const myH1 = document.querySelector('h1');

myH1.textContent= x['squadName'];
header.append.Child(myH1);

const myPara = document.createElement('p');

myPara.textContent = 'hometown': ${x['hometown']} //Formed: ${x['formed']};
header.append.Child(myPara);
}
populateHeader(superheros);
