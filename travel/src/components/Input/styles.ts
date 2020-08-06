import styled from 'styled-components';

export const Container = styled.div`
  background: #f4ede8;
  border: 2px solid #e4891c;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #e4891c;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #e4891c;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
