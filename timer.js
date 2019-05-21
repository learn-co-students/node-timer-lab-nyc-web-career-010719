const arg = process.argv.pop();
let time;

if (arg.slice(arg.length - 3) === 'min') {
  time = parseInt(arg.substring(0, arg.length - 3)) * 60;
} else if (arg.slice(arg.length - 1) === 's') {
  time = parseInt(arg.substring(0, arg.length - 1));
} else {
  process.exit(1);
};

const timeout = global.setInterval(() => {
  time--;
  console.log(`Left: ${time}s`);
  
  if (time === 0) {
    global.clearInterval(timeout);
    process.exit();
  };
}, 1000);
