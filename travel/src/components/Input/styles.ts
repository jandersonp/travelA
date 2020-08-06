import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #f4ede8;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #e4891c;
  color: #e4891c;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #111;
      border-color: #111;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #9c98a6;
    `}



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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
`;
