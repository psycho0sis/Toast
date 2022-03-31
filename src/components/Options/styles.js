import styled from 'styled-components';

const WIDTH = "100%";
const SCALE = 0.98;

export const Form = styled.form`
  align-items: center; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${WIDTH};
`

export const Options = styled.div`
  border: 2px solid black;
  display: flex;
  justify-content: center;
  max-width: 400px;
`;

export const ListOfOptions = styled.ul`
  width: ${WIDTH};
`
export const OptionsItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]}px;
  padding: ${({ theme }) => theme.spacing[4]}px;
  width: ${WIDTH};
`
export const Select = styled.select`
  border: 1px solid black;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: ${({ theme }) => theme.borderRadius[1]}px;
  color: ${({ theme }) => theme.colors.button};
  font-size: ${({ theme }) => theme.fontSize[2]};
  line-height: inherit;
  padding: ${({ theme }) => theme.spacing[4]}px;
  position: relative;
  transition: 0.4s all ease;
  width: ${WIDTH};
  
    &:hover {
      background: ${({ theme }) => theme.hover};
      transform: scale(${SCALE});
    }
  }
`
export const Option = styled.option`
  

`
export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  flex: 1 1 120px;
`
