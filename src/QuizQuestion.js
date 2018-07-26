import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  handleClick(buttonText) {
    console.log(this.props.quiz_question.answer === buttonText);
    if (this.props.quiz_question.answer === buttonText) {
      this.props.showNextQuestionHandler();
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
      </main>
    );
  }
}

export default QuizQuestion;
