import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  state = {
    feedback: [],
  };
  render() {
    return (
      <div>
        <h1>Review Your Feedback</h1>
        <p>Test: {JSON.stringify(this.props)}</p>
        {this.props.reduxState.map((element, i) => (
          <li key={i}>
            {element.feeling}
            {element.understand}
            {element.support}
            {element.comment}
          </li>
        ))}
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(reduxStateToProps)(Review);
