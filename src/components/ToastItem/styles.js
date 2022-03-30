import styled from 'styled-components';

import { theme } from '../../theme';

const WIDTH = "300px";
const HEIGTH = "150px";

export const Container = styled.div`
  width: ${WIDTH};
  height: ${HEIGTH};
  background-color: ${props => theme.colors[props.type]};
  border-radius: ${({ theme }) => theme.borderRadius[1]}px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: ${props => props.position.top};
  left: ${props => props.position.left};
  right: ${props => props.position.right};
  bottom: ${props => props.position.bottom};
`