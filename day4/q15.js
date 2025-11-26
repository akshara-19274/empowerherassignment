const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter number of seconds to count down: ", (answer) => {
  let timeLeft = parseInt(answer);
  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }
  console.log(`Starting countdown from ${timeLeft} seconds...`);
  const countdown = setInterval(() => {
    console.log(`Time left: ${timeLeft} seconds`);
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(countdown);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);
  setTimeout(() => {
    console.log("Press 's' to stop the countdown early.");
    rl.on("line", (input) => {
      if (input.trim().toLowerCase() === "s") {
        clearInterval(countdown);
        console.log("Countdown stopped by user.");
        rl.close();
      }
    });
  }, 1000);
});