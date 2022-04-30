//add d20 (random val at btn press)
//generate html w current structure
//step 1
// <div class="die">
//   <img src="img/d20.png" class="d20" alt="d20" />
//   <span class="die-val">7</span>
// </div>
//
//
// let newDie = `
//  <div class="die">
//    <img src="img/d20.png" class="d20" alt="d20" />
//    <span class="die-val">${Math.floor(Math.random() * 20) + 1}</span>
//  </div>
// `;
// boxElement.innerHTML += newDie;

//step2
//query box for all DiceRoll
//randomize val
// = rand   no +=

// let rollButton = document.getElementById('roller')
// rollButton.addEventListener('click', roll)


function roll() {
  //1st class
  var d100 = document.getElementsByClassName("die-val100");
  for (var i = 0; i < d100.length; i++) {
    let number = Math.floor(Math.random() * 100) + 1;
    d100[i].innerHTML = number;
    console.log(number);
  }
  var d20 = document.getElementsByClassName("die-val20");
  for (var i = 0; i < d20.length; i++) {
    let number = Math.floor(Math.random() * 20) + 1;
    d20[i].innerHTML = number;
    console.log(number);
  }
  var d12 = document.getElementsByClassName("die-val12");
  for (var i = 0; i < d12.length; i++) {
    let number = Math.floor(Math.random() * 12) + 1;
    d12[i].innerHTML = number;
    console.log(number);
  }
  var d10 = document.getElementsByClassName("die-val10");
  for (var i = 0; i < d10.length; i++) {
    let number = Math.floor(Math.random() * 10) + 1;
    d10[i].innerHTML = number;
    console.log(number);
  }
  var d8 = document.getElementsByClassName("die-val8");
  for (var i = 0; i < d8.length; i++) {
    let number = Math.floor(Math.random() * 8) + 1;
    d8[i].innerHTML = number;
    console.log(number);
  }
  var d6 = document.getElementsByClassName("die-val6");
  for (var i = 0; i < d6.length; i++) {
    let number = Math.floor(Math.random() * 6) + 1;
    d6[i].innerHTML = number;
    console.log(number);
  }
  var d4 = document.getElementsByClassName("die-val4");
  for (var i = 0; i < d4.length; i++) {
    let number = Math.floor(Math.random() * 4) + 1;
    d4[i].innerHTML = number;
    console.log(number);
  }
}
