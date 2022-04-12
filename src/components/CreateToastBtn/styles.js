import styled from 'styled-components';
import { theme } from '@/theme'

const WIDTH_BTN = "215px";
const HEIGHT_BTN = "70px";
const SCALE = 0.98;

export const CreateToastButton = styled.button`
  background-color: ${theme.colors.btnBg};
  border: 2px solid  ${theme.colors.buttonBorder};
  border-radius: ${theme.borderRadius[1]}px;
  color: ${theme.colors.text};
  display: block;
  font-size: ${theme.fontSize[2]}px;
  height: ${HEIGHT_BTN};
  margin-top: ${theme.spacing[3]}px;
  padding: ${theme.spacing[5]}px;
  width: ${WIDTH_BTN};

  &:disabled {
    background-color: ${theme.colors.disabledBtnBg};
    border: 2px solid  ${theme.colors.disabledButtonBorder};
    color: ${theme.colors.disabledBtnText};
    &:hover {
      transform: scale(1);
    }
  }

  &:hover {
    transform: scale(${SCALE});
  }
`