import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestChart extends Component {
  componentDidMount() {
    console.log(this.props.items);
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map((i) => {
          <span>:( </span>;
        })}
      </div>
    );
  }
}

TestChart.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TestChart;
