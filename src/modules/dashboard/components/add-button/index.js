import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { FabContainer } from './styled';

function AddButton() {
  
    return (
      <FabContainer>
        <Fab color="secondary" aria-label="Add">
          <AddIcon />
        </Fab>
      </FabContainer>
    );
  }
  
  export default AddButton;