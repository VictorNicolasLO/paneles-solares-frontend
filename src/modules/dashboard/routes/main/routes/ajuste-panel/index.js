import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';
import { title, description } from './consts';
import { ShowAnimation } from '../../../../components/animations/StyledComponents';
import ParamController from './containers/param-controller';
import { importContexts, injectContexts } from 'rctx';
import ParamsCtx from './ctx/Params.ctx';
import AcceptDialog from '../../../../components/accept-dialog';
import SectionInfo from '../../../../components/section-info';
function AjustePanel({ paramsCtx: { openDialog, save, closeDialog } }) {
  return (
    <>
      <Grid container>
        <SectionInfo title={title} description={description} />
        <Grid
          item
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start"
          xs={4}
        >
          <Grid item>
            <Button variant="contained" onClick={save} color="secondary">
              Guardar
            </Button>
          </Grid>
        </Grid>
        <ParamController />
      </Grid>
      <AcceptDialog
        open={openDialog}
        title="Guardar"
        onCancel={closeDialog}
        onAccept={() => {}}
        content="¿Seguro que desea guardar esta informacion? los cambios pueden tardar en tener efecto"
      />
    </>
  );
}

export default importContexts(
  injectContexts(AjustePanel, { paramsCtx: ParamsCtx }),
  [ParamsCtx]
);
