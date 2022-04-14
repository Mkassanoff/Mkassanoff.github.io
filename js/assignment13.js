const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Lil Dude", "Cthulhu"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a beetle and crawled away"];


randomize.addEventListener('click', result);

function result() {

  let xItem = math.randomValueFromArray(insertX);
  let yItem = math.randomValueFromArray(insertY);
  let zItem = math.randomValueFromArray(insertZ);

  let newStory = storyText;

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

    newstory = newStory.replace("300", weight/14);
    newstory = newStory.replace("94", (temperature-32)/(5/9));
  }

  story.textContent = ;
  story.style.visibility = 'visible';
}
