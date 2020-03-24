import React from 'react';

class SimpleDisplayComp extends React.PureComponent {

  render() {
    console.log('SimpleDisplayComp rendered')

    return <h1>Won't you be my neighbor?</h1>
  }
}

export default SimpleDisplayComp;