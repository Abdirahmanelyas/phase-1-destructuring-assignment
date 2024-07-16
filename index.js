const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Ensure all variables (moo, neigh, baa, oink, cluck) are defined or imported
const { moo, neigh, baa, oink, cluck } = {
  moo: 'cow',
  neigh: 'horse',
  baa: 'sheep',
  oink: 'pig',
  cluck: 'chicken'
};

// Ensure all variables (bessie, dolly, babe, babe2) are defined or imported
const { bessie, dolly, babe, babe2 } = {
  bessie: 'cow',
  dolly: 'sheep',
  babe: 'pig',
  babe2: 'pig'
};

// Ensure all variables (bessie, dolly, babe, babe2) are defined or imported
const { bessie, dolly, babe, babe2 } = {
  bessie: 'cow',
  dolly: 'sheep',
  babe: 'pig',
  babe2: 'pig'
};
// Ensure all variables (blackAndWhite, black, pink) are defined or imported
const { blackAndWhite, black, pink } = {
  blackAndWhite: 'cow',
  black: 'sheep',
  pink: 'pig'
};
// Ensure all variables (red, orange, yellow, green, blue, indigo, violet) are defined or imported
const [red, orange, yellow, green, blue, indigo, violet] = ['red', 'orange', 'yellow', 'green', 'blue', 'indg', 'violet'];

// Ensure all variables (r, o, y, g, b, v) are defined or imported
const [r, o, y, g, b, v] = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

// Ensure indg is defined or imported
const [indg] = ['indigo'];

// Ensure all variables (muppetName, color, song1, song2, song4, job, partner) are defined or imported
const { muppetName, color, song1, song2, song4, job, partner } = {
  muppetName: 'Kermit',
  color: 'green',
  song1: 'Rainbow Connection',
  song2: 'Moving Right Along',
  song3: 'Bein’ Green',
  song4: 'I Hope That Somethin’ Better Comes Along',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};




// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner