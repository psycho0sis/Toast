import styled from 'styled-components';

const WIDTH = "26vw";
const HEIGTH = "19vh";
const SCALE = 0.98;

export const Container = styled.div`
  background-color: ${props => props.color};
  border: 1px solid ${props => props.color ? props.color : "black"};
  border-radius: ${({ theme }) => theme.borderRadius[1]}px;
  color: ${({ theme }) => theme.colors.text};
  margin: ${props => props.margins}px;
  padding: ${({ theme }) => theme.spacing[3]}px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${props => props.position.top + props.index * 20}%;
  left: ${props => props.position.left};
  right: ${props => props.position.right};
  bottom: ${props => props.position.bottom + props.index * 20}%;
  transition: 0.3s all ease;
  z-index: 2;
  width: ${WIDTH};
  height: ${HEIGTH};
`

Container.defaultProps = {
  color: "white",
  position: "top-right",
  margins: "10px"
};

export const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  transition: 0.3s all ease;

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