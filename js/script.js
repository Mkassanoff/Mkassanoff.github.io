const para = document.querySelector('p');


function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = `Player1: ${name}`;
}

para.addEventListener('click', updateName);
