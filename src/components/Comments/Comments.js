import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    comments: '',
  };
  sendFeedback = () => {
    this.props.dispatch({ type: 'comments', payload: this.state.comments });
    this.props.history.push('/comments');
  };

  handleChange = (e) => {
    this.setState({ comments: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>How are you Comments today?</h1>
        <form>
          <label htmlFor='comments'>Scale 1-5:</label>
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
