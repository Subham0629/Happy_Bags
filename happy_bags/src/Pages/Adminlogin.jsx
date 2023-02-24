import { Link } from "react-router-dom";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react-use-disclosure';
  import React  from "react";
function Admin() {
  const{authState,loginUser }=useContext(AuthContext)
  console.log(authState.isAuth)
const { isOpen, onOpen, onClose } = useDisclosure()
const email = React.useRef(null)
const password = React.useRef(null)
const handleSubmit=(e)=>{
  e.preventDefault();
  let q1=email.current.value;
  let q2=password.current.value
  console.log(q1,q2)
  const userdetail={email:q1,password:q2}
  fetch("https://reqres.in/api/login",{
    method:"POST",
    
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(userdetail),
  })
  .then((res)=>res.json())
  .then((bag)=>{
    console.log(bag)
    if(bag.token){
      loginUser(bag.token)
    }
    if(!bag.token){
      alert("Wrong Credentials")
    }
  })
  .catch((err)=>{console.log("kk")
  alert("Wrong Credentials")
  })
  email.current.value=""
  password.current.value=""
}
if(authState.isAuth){
  return <Navigate to="/AdminPage"/>
}

      
        return (
          <>
          <Button marginTop={50} marginBottom={50} colorScheme='blue' onClick={onOpen}>Welcome Admin Click Here</Button>
            <Modal
              initialFocusRef={email}
              finalFocusRef={password}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Admin Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Please enter your email address</FormLabel>
                    <Input ref={email}  placeholder='E-Mail Address' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Please enter your Password</FormLabel>
                    <Input ref={password} placeholder='Password' />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
                    Log in
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      
}
export default Admin