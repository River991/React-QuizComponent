import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section>
          <ul>
            {this.props.quiz_question.answer_options.map(x => (
              <QuizQuestionButton key={x.toString()} button_text={x} />
            ))}}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
