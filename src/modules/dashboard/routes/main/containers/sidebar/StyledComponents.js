import styled from 'styled-components';
import { Grid } from '@material-ui/core';
export const SidebarContainer = styled(Grid)`
  padding-bottom: 10px;
  overflow: auto !important;
  height: 100% !important;
  position: relative !important;
  max-height: calc(100vh - 270px) !important;
`;
