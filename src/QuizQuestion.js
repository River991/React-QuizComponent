import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false
    };
  }

  handleClick(buttonText) {
    console.log(this.props.quiz_question.answer === buttonText);
    if (this.props.quiz_question.answer === buttonText) {
      this.props.showNextQuestionHandler();
      this.setState(() => {
        return { incorrectAnswer: false };
      });
    } else {
      this.setState(() => {
        return { incorrectAnswer: true };
      });
    }
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section>
          <ul>
            {this.props.quiz_question.answer_options.map(x => (
              <QuizQuestionButton
                clickHandler={this.handleClick.bind(this)}
                key={this.props.quiz_question.answer_options.indexOf(x)}
                button_text={x}
              />
            ))}}
          </ul>
        </section>
        {this.state.incorrectAnswer ? (
          <p className="error">Sorry, that's not right</p>
        ) : null}
      </main>
    );
  }
}

export default QuizQuestion;
