import styled from 'styled-components';

const WIDTH_BTN = "80px";
const HEIGHT_BTN = "30px";

export const Options = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid black;
  max-width: 400px;
`;

export const CreateToastBtn = styled.button`
  width: ${WIDTH_BTN};
  height: ${HEIGHT_BTN},
  font-size: ${({ theme }) => theme.fontSize[1]};
`
export const ListOfOptions = styled.ul`

`
export const OptionsItem = styled.li`
  padding: ${({ theme }) => theme.spacing[4]}px;

`
export const Select = styled.select`
  border: 1px solid black;
`
export const Option = styled.option`
  

`
export const Label = styled.span`

`
