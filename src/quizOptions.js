import React, { Component } from "react";

class QuizOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.childCheckResults = this.childCheckResults.bind(this);
  }

  childCheckResults() {
    this.props.checkResults(this.props.val);
  }

  render() {
    return (
      <div className="fields">
        <div className="field-block" onClick={this.childCheckResults}>
          The answers is {this.props.val}{" "}
        </div>
      </div>
    );
  }
}

export default QuizOptions;
