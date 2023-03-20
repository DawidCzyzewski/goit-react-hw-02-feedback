// Import necessary elements
import PropTypes from 'prop-types';
import { Component } from 'react';

export class App extends Component {
  static defaultProps = {
    defaultProp: 0,
  };

  static propTypes = {
    title: PropTypes.string,
    defaultProp: PropTypes.number,
  };

  state = {
    good: this.props.defaultProp,
    neutral: this.props.defaultProp,
    bad: this.props.defaultProp,
  };

  // countTotalFeedback = () => {};
  // countPositiveFeedbackPercentage = () => {};

  render() {
    return <div>working</div>;
  }
}
