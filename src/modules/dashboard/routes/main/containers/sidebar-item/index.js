import React from 'react';
import { DividerItemContainer, ItemContainer } from './StyledComponents';
import { withRouter } from 'react-router';
function SidebarItem(props) {
  const { route, isSelected } = props;
  console.log(isSelected);
  if (route.isDivider)
    return <DividerItemContainer>{route.name}</DividerItemContainer>;

  return (
    <ItemContainer
      onClick={() => {
        props.history.push(route.path);
      }}
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      isSelected={isSelected}
    >
      <route.Icon />
      <div>{route.name}</div>
    </ItemContainer>
  );
}

export default withRouter(SidebarItem);
