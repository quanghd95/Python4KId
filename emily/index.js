const name = "John Doe";
const jobTitle = "Software Engineer";
const hobbies = ["coding", "reading", "traveling"];

function displayName() {
  console.log(`My name is ${name}.`);
}

function displayJobTitle() {
  console.log(`I am a ${jobTitle}.`);
}

function displayHobbies() {
  console.log(`Some of my hobbies are:`);
  for (let i = 0; i < hobbies.length; i++) {
    console.log(`- ${hobbies[i]}`);
  }
}

displayName();
displayJobTitle();
displayHobbies();
