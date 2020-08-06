import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/images/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 700px;

  img {
    width: 400px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff9000;
    height: 56px;
    border: 0;
    border-radius: 10px;
    padding: 0 16px;
    width: 300px;
    margin-top: 16px;
    color: #ffffff;
    font-weight: 700;
    transition: background-color 0.2s;
    text-decoration: none;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat;
  background-size: cover;
`;
