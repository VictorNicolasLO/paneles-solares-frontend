import React from 'react';
import { injectContexts } from 'rctx';
import LayoutCtx from '../../ctx/Layout.ctx';
import { Grid } from '@material-ui/core';
import { menu } from '../../consts';
import SidebarItem from '../sidebar-item';
import { SidebarContainer } from './StyledComponents';

function Sidebar(props) {
  const {
    layoutCtx: { route: selectedRoute }
  } = props;

  return (
    <SidebarContainer
      container
      item
      xs={3}
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      wrap="nowrap"
    >
      {menu.map((route, i) => {
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
