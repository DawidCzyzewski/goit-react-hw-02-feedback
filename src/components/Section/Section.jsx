import { Component } from 'react';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <h5> {title} </h5>
        {children}
      </>
    );
  }
}

// Add expected types of input
Section.propTypes = {
  title: PropTypes.string.isRequired,
  // children: PropTypes.node.isRequired,
};
