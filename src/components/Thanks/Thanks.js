import React, { Component } from 'react';

class Thanks extends Component {
  goHome = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <>
        <h1>Feedback</h1>
        <button onClick={this.goHome}>Leave New Feedback</button>
      </>
    );
  }
}

export default Thanks;
