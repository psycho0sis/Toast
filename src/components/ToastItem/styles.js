import styled, {keyframes} from 'styled-components';
import { theme } from '@/theme';

const WIDTH = "26vw";
const HEIGTH = "19vh";
const SCALE = 0.98;

const slidein = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

export const Container = styled.div`
  align-items: center;
  animation: ${slidein} 0.5s ease 1;
  background-color: ${props => props.color ? props.color : theme.colors.defaultToastBg};
  border: 1px solid ${props => props.color ? props.color : "black"};
  border-radius: ${({ theme }) => theme.borderRadius[1]}px;
  bottom: ${props => props.position.bottom + props.index * 20}%;
  color: ${({ theme }) => theme.colors.text};
  display: flex; 
  flex-direction: column;
  height: ${HEIGTH};
  justify-content: space-around;
  left: ${props => props.position.left};
  margin: ${props => props.margins ? props.margins : theme.spacing[3]}px;
  padding: ${({ theme }) => theme.spacing[3]}px;
  position: absolute;
  right: ${props => props.position.right};
  top: ${props => props.position.top + props.index * 20}%;
  transition: 0.5s all ease;
  width: ${WIDTH};
  z-index: 2;
`

Container.defaultProps = {
  color: "white",
  position: {
    top: "initial",
    left: 0,
    right: "initial",
    bottom: 0
  },
  margins: "10px"
};

export const Image = styled.img`
  height: ${props => props.height}px;
  transition: 0.3s all ease;
  width: ${props => props.width}px;
  
    &:hover {
      transform: scale(${props => props.hover ? SCALE : 1});
    }
`
export const Content = styled.div`
  align-items: center;
  display: flex;
  gap: 0 ${({ theme }) => theme.spacing[3]}px;
  width: 100%;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
`

export const Button = styled.button`
  background: transparent;
`

export const TitleContainer = styled.div`
  aling-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`