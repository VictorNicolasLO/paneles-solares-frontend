import React, { useState } from 'react';
import { DateTimePicker } from '@material-ui/pickers';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  DialogActions,
  Button,
} from '@material-ui/core';

function DateSelectDialog({
  open,
  onDateSelect,
  onClose,
  onFilter,
  defaultDates: [dateFrom, dateTo],
}) {
  const [selectedDateFrom, handleDateChangeFrom] = useState(
    dateFrom || new Date(),
  );
  const [selectedDateTo, handleDateChangeTo] = useState(dateTo || new Date());

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true}>
      <DialogTitle>Seleccione un rango de fecha</DialogTitle>
      <DialogContent>
        <Grid
          style={{ overflow: 'hidden', paddingBottom: '0px' }}
          container
          direction="column"
          spacing={3}>
          <Grid item>
            <DateTimePicker
              fullWidth
              format="MMMM D YYYY, h:mm a"
              label="Desde"
              inputVariant="outlined"
              value={selectedDateFrom}
              onChange={handleDateChangeFrom}
            />
          </Grid>
          <Grid item>
            <DateTimePicker
              fullWidth
              format="MMMM D YYYY, h:mm a"
              label="Hasta"
              inputVariant="outlined"
              value={selectedDateTo}
              onChange={handleDateChangeTo}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onFilter(selectedDateFrom, selectedDateTo)}>
          Filtrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DateSelectDialog;
