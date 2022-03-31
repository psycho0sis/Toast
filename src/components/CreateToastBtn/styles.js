import styled from 'styled-components';

const WIDTH_BTN = "215px";
const HEIGHT_BTN = "70px";
const SCALE = 0.98;

export const CreateToastButton = styled.button`
  border: 2px solid  ${({ theme }) => theme.colors.button};
  border-radius: ${({ theme }) => theme.borderRadius[1]}px;
  color: ${({ theme }) => theme.colors.button};
  display: block;
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  height: ${HEIGHT_BTN};
  margin-top: ${({ theme }) => theme.spacing[3]}px;
  padding: ${({ theme }) => theme.spacing[5]}px;
  width: ${WIDTH_BTN};

  &:hover {
    transform: scale(${SCALE});
  }
`