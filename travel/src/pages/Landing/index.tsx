import React from 'react';
import { Link } from 'react-router-dom';

import landingImg from '../../assets/images/landing.svg';

import { Container, Content, Background } from './styles';

const Landing: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={landingImg} alt="Plataforma de viagem" />
          <h2>Your online travel platform.</h2>
          <Link to="/home">Travel</Link>
        </Content>

        <Background />
      </Container>
    </>
  );
};

export default Landing;
