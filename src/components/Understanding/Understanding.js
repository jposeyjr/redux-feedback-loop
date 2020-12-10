import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  sendFeedback = () => {
    let num = e.target.value;
    if (num === 0) {
      alert('Please enter a valid number.');
    } else if (num > 10) {
      alert('Please enter a number 1-10.');
    } else {
      {
        this.props.dispatch({ type: 'UNDERSTANDING', payload: num });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>How well did you understand todays content?</h1>
        <form>
          <label>Scale 1-10:</label>
          <input type='number' required></input>
        </form>
        <button>Submit</button>
      </div>
    );
  }
}

export default connect()(Understanding);
