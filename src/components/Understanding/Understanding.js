import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = {
    understanding: '',
  };
  sendFeedback = () => {
    let num = this.state.understanding;
    if (num === 0) {
      alert('Please enter a valid number.');
    } else if (num > 5) {
      alert('Please enter a number 1-5.');
    } else {
      this.props.dispatch({ type: 'understanding', payload: num });
      this.props.history.push('/support');
    }
  };

  handleChange = (e) => {
    this.setState({ understanding: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>How well are you understanding the topic today?</h1>
        <form>
          <label htmlFor='understanding'>Scale 1-5:</label>
          <input
            id='understanding'
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

export default connect()(Understanding);
