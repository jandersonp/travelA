import React, { useCallback, useRef } from 'react';
import {
  FiPhone,
  FiUser,
  FiNavigation2,
  FiCalendar,
  FiUsers,
} from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name required'),
        phone: Yup.string().matches(phoneRegExp).required('Phone required'),
        origin: Yup.string().required('Origin required'),
        destination: Yup.string().required('Destination required'),
        datefrom: Yup.string().required('Date From required'),
        dateto: Yup.string().required('Date To required'),
        travelersnumber: Yup.string().required('Travelers number required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Create your next travel:</h1>

          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="phone" icon={FiPhone} placeholder="Phone" />
          <Input name="origin" icon={FiUser} placeholder="Origin" />
          <Input
            name="destination"
            icon={FiNavigation2}
            placeholder="Destination"
          />
          <Input name="datefrom" icon={FiCalendar} placeholder="Date from" />
          <Input name="dateto" icon={FiCalendar} placeholder="Date to" />
          <Input
            name="travelersnumber"
            icon={FiUsers}
            placeholder="Travelers number"
          />

          <Button type="submit">Create</Button>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default Home;
