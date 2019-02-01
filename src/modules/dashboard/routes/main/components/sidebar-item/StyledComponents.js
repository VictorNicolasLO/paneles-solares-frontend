import styled from 'styled-components';
import { Grid } from '@material-ui/core';
export const ItemContainer = styled(Grid)`
  padding: 10px 0;
  cursor: pointer;
  padding-left: 45px;
  width: 100%;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  & > div {
    margin-left: 10px;
  }

  &::after {
    transition: 0.2s;
    opacity: 0;
    transform: translateX(-10px);
    content: '';
    position: absolute;
    left: 0;
    width: 10px;
    height: 100%;
    background: rgb(0, 143, 251);
  }
  ${props => {
    if (props.isSelected)
      return `
        background:white !important;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        &::after {
            transform: translateX(0px) !important;
            opacity: 1;
          }
      `;
    return '';
  }}
`;

export const DividerItemContainer = styled.div`
  padding-left: 50px;
  color: rgb(191, 191, 191);
  font-weight: 600;
  font-size: 1em;
  margin-bottom: 5px;
`;
