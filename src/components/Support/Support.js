import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  sendFeedback = () => {
    let num = e.target.value;
    if (num === 0) {
      alert('Please enter a valid number.');
    } else if (num > 10) {
      alert('Please enter a number 1-10.');
    } else {
      {
        this.props.dispatch({ type: 'SUPPORT', payload: num });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>How well are you being supported today?</h1>
        <form>
          <label>Scale 1-10:</label>
          <input type='number' required></input>
        </form>
        <button>Submit</button>
      </div>
    );
  }
}

export default connect()(Support);
