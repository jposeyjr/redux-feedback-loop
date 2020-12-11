import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    comments: '',
  };
  sendFeedback = () => {
    this.props.dispatch({ type: 'COMMENT', payload: this.state.comments });
    this.props.history.push('/review');
  };

  handleChange = (e) => {
    this.setState({ comments: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <form>
          <label htmlFor='comments'>Comment:</label>
          <input
            id='comments'
            type='text'
            onChange={(e) => this.handleChange(e)}
            pattern='[A-Za-z]{120}'
          ></input>
        </form>
        <button onClick={this.sendFeedback}>Next</button>
      </div>
    );
  }
}

export default connect()(Comments);
