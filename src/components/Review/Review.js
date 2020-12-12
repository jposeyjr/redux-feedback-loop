import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Review.css';
import axios from 'axios';

class Review extends Component {
  handleClick = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.reduxStore,
    })
      .then((res) => {
        console.log('POST response', res);
      })
      .catch((error) => {
        console.log('Error posting: ', error);
      });
    this.props.history.push('/thanks');
  };

  render() {
    return (
      <div>
        <h1>Review Your Feedback</h1>
        <ul>
          <li>Feeling: {this.props.reduxState.feeling}</li>
          <li>Understanding: {this.props.reduxState.understand}</li>
          <li>Support: {this.props.reduxState.support}</li>
          <li>Comment: {this.props.reduxState.comment}</li>
        </ul>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(reduxStateToProps)(Review);
