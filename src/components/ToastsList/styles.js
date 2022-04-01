import styled from 'styled-components';

export const Container = styled.ul`
  bottom: ${props => props.position.bottom};
  display: flex;
  flex-wrap: wrap;
  left: ${props => props.position.left};
  position: absolute;
  right: ${props => props.position.right};
  top: ${props => props.position.top};
  
  
  width: 26vw;

`