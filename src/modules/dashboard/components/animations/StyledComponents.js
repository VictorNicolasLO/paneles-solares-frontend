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

export const ShowAnimation = styled.div`
  opacity: 0;
  animation: ${animationShow} ${({ time }) => `${time || '.3'}s`};
  animation-fill-mode: forwards;
  ${props => {
    return `
      animation-delay:${props.delay}s;
    `;
  }}
`;
