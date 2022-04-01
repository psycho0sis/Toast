import styled from 'styled-components';

const WIDTH_BTN = "215px";
const HEIGHT_BTN = "70px";
const SCALE = 0.98;

export const CreateToastButton = styled.button`
  background-color: ${({ theme }) => theme.colors.btnBg};
  border: 2px solid  ${({ theme }) => theme.colors.buttonBorder};
  border-radius: ${({ theme }) => theme.borderRadius[1]}px;
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  height: ${HEIGHT_BTN};
  margin-top: ${({ theme }) => theme.spacing[3]}px;
  padding: ${({ theme }) => theme.spacing[5]}px;
  width: ${WIDTH_BTN};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledBtnBg};
    border: 2px solid  ${({ theme }) => theme.colors.disabledButtonBorder};
    color: ${({ theme }) => theme.colors.disabledBtnText};
    &:hover {
      transform: scale(1);
    }
  }

  &:hover {
    transform: scale(${SCALE});
  }
`