import styled from 'styled-components';

const WIDTH = "400px";
const HEIGHT = "500px";

export const Container = styled.div`
  margin: auto;
  border: 2px solid black;
  font-family: 'Poppins', sans-serif;
  max-width: ${WIDTH};
  width: 100%;
  min-height: ${HEIGHT};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[2]};
  text-align: center;
`
