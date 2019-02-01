import React from 'react';
import { Button } from '@material-ui/core';

const OutlineButton = props => {
  return (
    <Button
      onClick={props.onClick}
      style={{
        color: 'white',
        borderColor: 'white',
        textTransform: 'none',
        fontWeight: '500'
      }}
      variant="outlined"
      component="span"
    >
      <props.Icon style={{ marginRight: '5px' }} />
      {props.children}
    </Button>
  );
};

export default OutlineButton;
