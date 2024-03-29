import styled from 'styled-components';

export const Container = styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: ${(props) => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: #eee;
  }

  progress[value]::-webkit-progress-value {
    background-color: ${(props) => props.color};
    border-radius: 20px;
    height: 10px;
  }
`;
