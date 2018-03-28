import React, { PureComponent } from 'react';

class Container extends PureComponent {
  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    )
  }
}

export default Container;