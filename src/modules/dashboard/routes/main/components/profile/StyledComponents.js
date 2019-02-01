import styled, { keyframes } from 'styled-components';

const animationShow = keyframes`
from{
  opacity:0;
  transform:translateY(-20px)
}
to{
  opacity:1;
  transform:translateY(0px)
}
`;

export const ProfileSection = styled.div`
  color: white !important;
  margin: 5px 0;
  opacity: 0;

  animation: ${animationShow} 0.3s;
  animation-fill-mode: forwards;

  ${props => {
    return `
      animation-delay:${props.animationRetard}s;
    `;
  }}
`;
