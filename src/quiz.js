import React from "react";
import QuizOptions from "./quizOptions";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    let riddle = this.playGame();

    this.state = { riddle, correctAnswer: false, gameOver: false };
    this.renderOptions = this.renderOptions.bind(this);
    this.checkResultsFunc = this.checkResultsFunc.bind(this);
  }

  checkResultsFunc(option) {
    if (this.option === this.state.riddle.answer) {
      console.log("Correct Answer");
      this.setState({ correctAnswer: true, gameOver: true });
    } else {
      console.log("Wrong Answer");
      this.setState({ correctAnswer: false, gameOver: true });
    }
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomResultsArray(sum) {
    // let result = sum;
    let resultsArray = [];
    let randomNumberArray = [];

    while (randomNumberArray.length <= 3) {
      let randomNumber = this.randomNumber(1, 19);
      if (randomNumberArray.indexOf(randomNumber) > -1) continue;
      randomNumberArray.push(randomNumber);
    }

    for (let i = 0; i < 3; i++) {
      let addSubtract = this.randomNumber(0, 1);
      let result = sum;
      if (addSubtract === 1) {
        //add the number to the result
        result += randomNumberArray[i];
        resultsArray.push(result);
      } else {
        //subtract the number from the result
        result -= randomNumberArray[i];
        resultsArray.push(result);
      }
    }

    return resultsArray;
  }
  playGame() {
    let vfield1 = this.randomNumber(20, 45);
    console.log(vfield1);
    let vfield2 = this.randomNumber(20, 45);
    console.log(vfield2);
    let answer = vfield1 + vfield2;
    let preResultArray = this.randomResultsArray(answer);
    preResultArray.push(answer);
    preResultArray.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    let riddle = {
      resultsArray: preResultArray,
      field1: vfield1,
      field2: vfield2,
      answer: answer
    };
    return riddle;
  }

  renderOptions() {
    return (
      <div className="options">
        {this.state.riddle.resultsArray.map((options, i) => (
          <QuizOptions
            val={options}
            key={i}
            checkResults={this.checkResultsFunc}
          />
        ))}
        }
      </div>
    );
  }

  render() {
    return (
      <div className="quiz">
        <div className="quiz-content">
          <p className="question">
            What is the sum of{" "}
            <span className="text-info">{this.state.riddle.field1}</span> +
            <span className="text-info">{this.state.riddle.field2}</span>
          </p>
          {this.renderOptions()}
          <div className="play-again">
            <a className="button" href="#">
              Play Again
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
