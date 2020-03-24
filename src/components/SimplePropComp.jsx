import React from 'react';

function SimplePropComp(props) {
  console.log('SimplePropComp rendered')

  return <h1>The numbers added together are: {props.solution}</h1>
}

export default React.memo(SimplePropComp);