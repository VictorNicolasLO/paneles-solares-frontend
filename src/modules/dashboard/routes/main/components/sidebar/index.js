import React from 'react';
import { injectContexts } from 'rctx';
import LayoutCtx from '../../ctx/Layout.ctx';
import { Grid } from '@material-ui/core';
import { routes } from '../../const';
import SidebarItem from '../sidebar-item';
import { SidebarContainer } from './StyledComponents';

function Sidebar(props) {
  const {
    layoutCtx: { route: selectedRoute }
  } = props;

  return (
    <SidebarContainer
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
    >
      {routes.map((route, i) => {
        return (
          <SidebarItem
            isSelected={route == selectedRoute}
            route={route}
            key={i}
          />
        );
      })}
    </SidebarContainer>
  );
}

export default injectContexts(Sidebar, { layoutCtx: LayoutCtx });
