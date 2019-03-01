import React from 'react';
import { Slider } from '@material-ui/lab';
import { Grid, Typography, TextField } from '@material-ui/core';
import { injectContexts } from 'rctx';
import ParamCtx from '../../ctx/Params.ctx';
function ParamController({ paramCtx: { onChange, value, onInput } }) {
  return (
    <Grid item xs={12} container justify="center" alignContent="center">
      <Grid item style={{ textAlign: 'center' }}>
        <TextField
          id="outlined-email-input"
          label="Valor"
          name="value"
          type="number"
          margin="normal"
          variant="outlined"
          onInput={onInput}
          value={value}
          style={{ margin: 'auto', marginTop: '30px', marginBottom: '20px' }}
        />
        <br />
        <Slider
          value={value}
          aria-labelledby="label"
          onChange={onChange}
          style={{ width: '400px' }}
        />
      </Grid>
    </Grid>
  );
}

export default injectContexts(ParamController, { paramCtx: ParamCtx });
