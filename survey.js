const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// need to capture the answers somewhere, soooo create a variable

let answers = '';


rl.question('What\'s your name? Nicknames are also acceptable :)? ', (userName) => {
  rl.question('What\'s an activity you like doing? ', (userActivity) => {
    rl.question('What do you listen to while doing that? ', (userMusic) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (userFaveMeal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (userFaveFood) => {
          rl.question('Which sport is your absolute favourite? ', (userFaveSport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (userSuperPower) => {

              console.log(`Hey! My name is ${userName}! I'm pretty obsessed with ${userActivity}, and I love listening to ${userMusic} while I play. On a lazy weekend I'm partial to a late ${userFaveMeal}, and if they have ${userFaveFood} then I order it right away! I also really love ${userFaveSport} and if I had a super power I would ${userSuperPower}!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});