import styled from 'styled-components';

const WIDTH = "400px";
const HEIGHT = "500px";

export const Container = styled.div`
  border: 1px solid  ${({ theme }) => theme.colors.button};
  border-radius:  ${({ theme }) => theme.borderRadius[1]}px;
  font-family: 'Poppins', sans-serif;
  margin: auto;
  max-width: ${WIDTH}; 
  min-height: ${HEIGHT};
  padding: ${({ theme }) => theme.spacing[4]}px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[4]}px;
  margin-bottom: ${({ theme }) => theme.spacing[4]}px;
  text-align: center;
`
