import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@chakra-ui/react';


const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button color="black"  colorScheme='white' variant='ghost'  onClick={() => loginWithRedirect()}>Log in/Sign Up</Button>
 
};

export default Login;
