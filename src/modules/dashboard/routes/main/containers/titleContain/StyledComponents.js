import styled, { keyframes } from 'styled-components';
import { Typography } from '@material-ui/core';

const show = keyframes`
    from{opacity:0;transform:translateY(10px)}
    to{opacity:1}
`;

export const StyledTypography = styled(Typography)`
  padding-left: 15px;
  animation: 0.2s ${show};
  position: relative;
  top: -20px;
`;
