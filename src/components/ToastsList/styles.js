import styled from 'styled-components';
import { theme } from '@/theme';

export const Container = styled.ul`
  bottom: ${props => props.position.bottom};
  display: flex;
  flex-wrap: wrap;
  left: ${props => props.position.left};
  margin: ${props => props.margins ? props.margins : theme.spacing[3]}px;
  position: absolute;
  right: ${props => props.position.right};
  top: ${props => props.position.top};
  width: 26vw;
`