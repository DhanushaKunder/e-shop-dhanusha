import styled from "styled-components";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect} from "react";
import { login } from "../redux/apiCalls";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
   url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
      center;
  background-size: cover;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  margin-left: 25%;
  font-size: 24px;
  font-weight: 300;
`;
const Captions= styled.h1`
  font-size: 14px;
  font-weight: 300;`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 25%;
  &:disabled{
    color:green;
    cursor: not-allowed;
  }
`;


const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null)
  const [clicked, setClicked]= useState(null)
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    setClicked(1)
    setTimeout(()=>{
      if(error){
      setErrors(error)}
    }, 3000)
  };
    useEffect(() => {
      return () => {
        setErrors(null); 
      };
  }, [clicked]);

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => {setUsername(e.target.value)
            setErrors(null)}}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => {setPassword(e.target.value)
              setErrors(null)}}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {errors  ? <Error>Something went wrong...</Error>:<Error></Error>}
          <Captions>Test Credentials to Login</Captions>
          <Captions>username: dhanu</Captions>
          <Captions>password: 12345</Captions>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;