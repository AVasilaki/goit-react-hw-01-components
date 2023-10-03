import styled from 'styled-components';
export const Wrapper = styled.div`
  margin: 0 auto;
  font-size: 24px;
  font-style: italic;
`;
export const Item = styled.div`
  display: flex;
  justify-content: start;
  gap: 24px;
  align-items: center;
  position: relative;
`;
export const Status = styled.div`
  width: ${({ size = 10 }) => `${size}px`};
  height: ${({ size = 10 }) => `${size}px`};
  border-radius: 5px;
  border: 1px solid #a4abb6;
  position: absolute;
  top: 18px;
  left: 18px;
  background-color: ${({ status }) => {
    if (status === true) {
      return '#56f000';
    } else if (status === false) {
      return '#fce83a';
    }
  }};
`;
