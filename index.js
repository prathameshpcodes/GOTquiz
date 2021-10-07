

const chalk = require('chalk');
const log = console.log

log(chalk.bgBlue("Winter is here. And we welcome you to a GoT Quiz to test your knowledge\n"))

var readlineSync = require("readline-sync")

var response = readlineSync.question(chalk.bold.white.bgBlue("Are you ready? (Yes/No) "))
console.log("\n")


if (response.toUpperCase() === "YES") {
  var userName = readlineSync.question(chalk.magenta("What is your name?"))
  console.log("\n")
  log(chalk.bgBlue("Hi " + userName + ". Let the game begin!"))
  console.log("\n")
  log(chalk.black.bgYellowBright("There will be three options for every question. Choose any three of the options by writing a b or c.\n"))

  score = 0;

  questions = [{
    question: "Where did Daenerys Targaryen eventually hatch her dragon eggs?\na- fireplace\nb- frozen cave\nc- funeral pyre\n",
    answer: "c"
  },
  {
    question: "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with?\na- Valar Rohnas\nb- Valar Dohaeris\nc- Valar GoGo\n",
    answer: "b"
  },
  {
    question: "American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise.\na- Lord of the Rings\nb- The Chronicles of Narnia\nc- Highlander\n",
    answer: "b"
  }, {
    question: "What is the only thing that can put out volatile Wildfire?\na- Sand\nb- Water\nc- Sunlight\n",
    answer: "a"
  }
  ]

  function play(question, answer) {
    var userAns = readlineSync.question(question)
    if (userAns.toUpperCase() === answer.toUpperCase()) {
      score++
      log(chalk.green("You know this answer! " + "\n" + "Points: " + score))
      console.log("--------")
    } else {
      score--
      log(chalk.red("You know nothing, " + userName + " Snow :( " + "\n" + "Points: " + score))
      console.log("--------")
    }
  }

  for (var i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }

  log(chalk.bgMagenta("Thanks for playing. Your total score is " + score + "\n"))

  log(chalk.yellowBright("\nPrevious Top Scorers:\nPragya: 3\nKriti: 2\nRahul: 2\n"))


  highScores = [3, 2, 1]

  for (i = 0; i < highScores.length; i++) {
    if (score >= highScores[i]) {
      log(chalk.bold.black.bgGreen("You are a top scorer. Please send a screenshot of your score!"))
      break
    }
  }
}
else
  console.log("Thanks for coming.. Goodbye!")
