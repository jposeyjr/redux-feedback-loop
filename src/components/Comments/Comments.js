import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  sendFeedback = () => {
    let comment = e.target.value;
    {
      this.props.dispatch({ type: 'COMMENTS', payload: comment });
    }
  };

  render() {
    return (
      <div>
        <h1>Do you have any comments that you want to leave?</h1>
        <form>
          <label>Comments</label>
          <input type='text'></input>
        </form>
        <button>Submit</button>
      </div>
    );
  }
}

export default connect()(Comments);
