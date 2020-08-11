import React from 'react';
import BeautyStars from 'beauty-stars';

import './stars.style.scss'

class Stars extends React.Component {
    state = { value: 0 };
    render() {
      return (
        <BeautyStars
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      );
    }
  }
export default  Stars;