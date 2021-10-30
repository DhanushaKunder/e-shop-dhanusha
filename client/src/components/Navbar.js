import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../redux/apiCalls";
import logo from "../images/logo2.png"


const Container = styled.div `
    height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Announcement = styled.div`
  height: 45px;
  width: 60vw;
  background-color: #58A89A;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: -1rem;
  border-radius: 10%;
`;

const Logo = styled.img`
  width: 90px;
  height: 87px;
  background-size: cover;
  margin-top: -1rem;
  cursor: pointer;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top:-1rem;
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  underline: none;

`;

const StyledLink= styled(Link)`
  text-decoration:none;
  font-size: 18px;
  cursor: pointer;
  ${'' /* margin-left: 25px; */}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const onClickHandler=(e)=>{
    e.preventDefault();
    Logout(dispatch);
  }

  // const logoClick=()=>{
  //   return(
  //     <Link to="/"></Link>
  //   )
  // }
    return (
        <Container>
            <Wrapper>
                <Left>
                  <Link to="/">
                    <Logo img src={logo}></Logo>
                  </Link>
                </Left>
                <Center>
                  <Announcement>Super Deal! Free Shipping on Orders Over Rs. 500/-</Announcement>;
                </Center>
                <Right>
                <MenuItem >{user ? 
                  
                    <MenuItem onClick={onClickHandler}> SIGN OUT </MenuItem>
                  :
                  <StyledLink to="/login">
                    <MenuItem> SIGN IN </MenuItem>
                  </StyledLink> }
                </MenuItem>

                    <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
