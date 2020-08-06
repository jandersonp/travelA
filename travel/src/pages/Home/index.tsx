import React from 'react';
import {
  FiPhone,
  FiUser,
  FiNavigation2,
  FiCalendar,
  FiUsers,
} from 'react-icons/fi';

import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Home: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Create your next travel:</h1>

          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="name" icon={FiPhone} placeholder="Phone" />
          <Input name="name" icon={FiUser} placeholder="Origin" />
          <Input name="name" icon={FiNavigation2} placeholder="Destination" />
          <Input name="date" icon={FiCalendar} placeholder="Date from" />
          <Input name="name" icon={FiCalendar} placeholder="Date to" />
          <Input name="name" icon={FiUsers} placeholder="Travelers number" />

          <Button type="submit">Create</Button>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default Home;
