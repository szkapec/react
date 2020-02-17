import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import AuthTemplate from '../templates/AuthTemplate';

import Heading from '../components/atoms/Heading/Heading';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from '../Routes/index';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from '../actions/index';
import { Redirect} from 'react-router-dom';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const LoginPage = ({userID, authenticate}) => (
  <AuthTemplate>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authenticate(username,password)
      }}
    >
      {({ handleChange, handleBlur, values }) => {
          if(userID){
              return <Redirect to={routes.home}/>;
          }
          return (
        <>
          <Heading>Zaloguj się</Heading>
          <StyledForm>
            <StyledInput
              type="text"
              name="username"
              placeholder="Login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledInput
              type="password"
              name="password"
              placeholder="Hasło"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <Button activecolor="notes" type="submit">
              Zaloguj
            </Button>
          </StyledForm>
          <StyledLink to={routes.register}>Zarejestruj się!</StyledLink>
        </>
          )}}
    </Formik>
  </AuthTemplate>
);

const mapStateToProps = ({userID = null}) => ({
    userID,
})

const mapDispatchToProps = dispatch => ({
    authenticate: (username, password) => dispatch(authenticateAction(username,password))
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage) ;