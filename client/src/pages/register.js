import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Header, Container } from 'semantic-ui-react';


const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const RegisterPage = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: [value]
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  }

  return (
    <Container fluid className='register'>
      <Header as='h2'>Register</Header>
      <Form className='form'>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Enter your name' type='text' value={values.name} onChange={handleChange} name='name' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Enter your email address' type='text' value={values.email} onChange={handleChange} name='email' />
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input placeholder='Enter password' type='password' value={values.password} onChange={handleChange} name='password' />
        </Form.Field>
        <Form.Field>
          <label>confirmPassword</label>
          <input placeholder='Confirm password' type='password' value={values.confirmPassword} onChange={handleChange} name='confirmPassword' />
        </Form.Field>
        <Link to='/users'>
          <Button color='blue' type='Submit' onClick={handleSubmit}>submit</Button>
        </Link>
        <Link to='/login'>
          <Button color='green' type='text'>I have an account  already!</Button>
        </Link>
      </Form>
    </Container>
  )
};

export default RegisterPage;