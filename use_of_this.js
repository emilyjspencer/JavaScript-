let troll = {
  name: 'Sally',
  hairColour: 'orange',
  owner: 'Lucy',
  countryOfOrigin: 'India',
  relatives: ['Jeff Tissue', 'Willy Dummy'],
  sayName: function() {return "The name of this troll is " + this.name + ".";}
};


console.log(troll.sayName()); // The name of this troll is Sally.
console.log(troll.owner); // Lucy