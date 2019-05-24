import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function AddButton() {
  
    return (
      <div>
        <Fab color="secondary" aria-label="Add">
          <AddIcon />
        </Fab>
      </div>
    );
  }
  
  export default AddButton;