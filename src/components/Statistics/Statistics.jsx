import { arrayOf } from 'prop-types';
import { Component } from 'react';

export class Statistics extends Component {
  render() {
    // console.log(this.props);
    const { good, neutral, bad, total, positiveFeedback, options } = this.props;
    // console.log(this.props);
    // const object = this.props;
    // console.log(options);
    // const objects = Object.entries(options);
    // console.log(objects)
    return (
      <>
        {/* TODO: Why not working? */}
        {/* {objects.map(option => (
          <div>{option}</div>
        ))} */}

        {/* {arrOptions.map(option => (
          <div>{console.log(option.keys())} </div>
        ))} */}

        <div>Good feedbacks: {positiveFeedback}%</div>
        <div>Ammount of good: {good}</div>
        <div>Ammount of neutral: {neutral}</div>
        <div>Ammount of bad: {bad}</div>
        <div>Total feedbacks: {total}</div>
      </>
    );
  }
}
