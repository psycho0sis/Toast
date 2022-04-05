import styled, { keyframes } from 'styled-components';
import { theme } from '@/theme';

const WIDTH = '300px';
const HEIGTH = '120px';
const SCALE = 0.98;

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const transform = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const marginLeft = keyframes`
  0% {
    margin-left: -250px;
  }
  100% {
    margin-left: ${theme.spacing[3]}px;
  }
`;

const marginTop = keyframes`
  0% {
    margin-top: -250px;
  }
  100% {
    margin-top: ${theme.spacing[3]}px;
  }
`;

const getAnimation = (props) => {
  switch (props.animation) {
    case 'opacity':
      return opacity;
    case 'transform':
      return transform;
    case "margin-left":
      return marginLeft;
    case "margin-top":
      return marginTop;
  }
};

export const Container = styled.li`
  align-items: center;
  animation: ${(props) => getAnimation(props)} 0.5s ease 1;
  background-color: ${(props) => (props.color ? props.color : theme.colors.defaultToastBg)};
  border: 1px solid ${(props) => (props.color ? props.color : 'black')};
  border-radius: ${({ theme }) => theme.borderRadius[1]}px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  height: ${HEIGTH};
  justify-content: space-around;
  margin: ${theme.spacing[3]}px;
  padding: ${({ theme }) => theme.spacing[3]}px;
  position: ${(props) => (props.position ? 'static' : 'absolute')};
  transition: 0.5s all ease;
  width: ${WIDTH};
  z-index: 2;
`;

Container.defaultProps = {
  color: 'white',
  position: {
    top: 'initial',
    left: 0,
    right: 'initial',
    bottom: 0
  },
  margins: '10px'
};

export const Image = styled.img`
  height: ${(props) => props.height}px;
  transition: 0.3s all ease;
  width: ${(props) => props.width}px;

  &:hover {
    transform: scale(${(props) => (props.hover ? SCALE : 1)});
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  gap: 0 ${({ theme }) => theme.spacing[3]}px;
  width: 100%;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

export const Button = styled.button`
  background: transparent;
`;

export const TitleContainer = styled.div`
  aling-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
