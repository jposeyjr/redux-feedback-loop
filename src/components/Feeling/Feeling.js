import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    feeling: '',
  };
  sendFeedback = (e) => {
    e.preventDefault();
    let num = this.state.feeling;
    if (num === 0) {
      alert('Please enter a valid number.');
    } else if (num > 5) {
      alert('Please enter a number 1-5.');
    } else {
      this.props.dispatch({ type: 'FEELING', payload: num });
      this.props.history.push('/understanding');
    }
  };

  handleChange = (e) => {
    this.setState({ feeling: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <form>
          <label htmlFor='feeling'>Scale 1-5:</label>
          <input
            id='feeling'
            type='number'
            min='0'
            max='5'
            pattern='[1-5]'
            onChange={(e) => this.handleChange(e)}
            required='required'
          ></input>
        </form>
        <button onClick={this.sendFeedback}>Next</button>
      </div>
    );
  }
}

export default connect()(Feeling);
