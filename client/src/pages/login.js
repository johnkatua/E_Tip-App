import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Header } from 'semantic-ui-react';

const initialValues = {
  name: '',
  password: ''
}

const LoginPage = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: [value]
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }
  return (
    <Container fluid className='login'>
      <Header as='h2'>Login</Header>
      <Form className='form'>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Enter your name' name='name' value={values.name} type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Enter your password' name='password' value={values.password} type='password' onChange={handleChange} />
        </Form.Field>
        <Link to='/users'>
          <Button color='blue' type='Submit' onClick={handleSubmit}>Submit</Button>
        </Link>
        <Link to='/register'>
          <Button color='green' type='text'>I don't have an account</Button>
        </Link>
      </Form>
    </Container>
  )
};

export default LoginPage;