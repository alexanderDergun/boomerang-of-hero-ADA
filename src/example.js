const keypress = require('keypress');



// process.stdin.on('keypress', (char, key) => {
//   console.log(`You typed ${data.toString()}`);
//   process.exit();
// });

keypress(process.stdin);

function runInteractiveConsole() {

process.stdin.on('keypress', (ch, key) => {
  console.log(key.name)
  // console.log(ch)
})
}

runInteractiveConsole();