import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    support: '',
  };
  sendFeedback = () => {
    let num = this.state.support;
    if (num === 0) {
      alert('Please enter a valid number.');
    } else if (num > 5) {
      alert('Please enter a number 1-5.');
    } else {
      this.props.dispatch({ type: 'SUPPORT', payload: num });
      this.props.history.push('/comments');
    }
  };

  handleChange = (e) => {
    this.setState({ support: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>How well are your being supported today?</h1>
        <form>
          <label htmlFor='support'>Scale 1-5:</label>
          <input
            id='support'
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

export default connect()(Support);
