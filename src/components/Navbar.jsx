import { AppBar, Box, Container, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
const StyledNavLink = styled(NavLink) ({
  textDecoration:'none',
  color: '#fff',
  fontSize:20,
  "&.active": {
   background:'navy',
   padding:10,
   borderRadius:10
  }
})
export const Navbar = () => {
  const auth = useAuth();
  const navLinkStyles = ({ isActive }) => {
    return {
         fontWeight: isActive ? "bold" : "normal",
         textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
  <>
    <AppBar position='fixed'>
    <Container>
    <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
    <Typography variant='h5'>React-Router-Dom</Typography>
      <nav className="primary-nav">
     <Box sx={{display:'flex',alignItems:'center',gap:'50px'}}>
             <StyledNavLink to='/'>Home</StyledNavLink>
             <StyledNavLink to='about'>About</StyledNavLink>
             <StyledNavLink to='products'>Products</StyledNavLink>
            <StyledNavLink to='signin'>Sign in</StyledNavLink>
      </Box>
      {/* {!auth.user && (
          <NavLink style={navLinkStyles} to='/login'>
            Login
          </NavLink>
        )} */}
      </nav>
    </Toolbar>
    </Container>
    </AppBar>
    </>
  );
};
