import React from 'react';
import { ArrowLeft, ArrowBack, ArrowForward } from '@material-ui/icons';
function MovmentButton({ style, right, left, className, onClick }) {
  return (
    <div {...{ style, className, onClick }} className="movment-button">
      {right ? <ArrowForward /> : <ArrowBack />}
    </div>
  );
}

export default MovmentButton;
