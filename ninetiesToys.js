var ninetiesToys = {
  softDoll: "Cabbage Patch",
  hardDoll: "Barbie",
  oddToy: "Furby",
  digitalToy: "Tamagotchi",
  craze: "Pokemon Cards",
  disturbingToy: "Alien Eggs",
  simpleToy: "Brains yoyo",
  girlyToy: "Hair Dolls"
};

function check(checkItem) {
if (ninetiesToys.hasOwnProperty(checkItem)) {
  return ninetiesToys[checkItem]
} else {
  return "Nope"
}
}

check("craze"); // Pokemon Cards
check("girlyToy"); // Hair Dolls