import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  
  FormControl,
  FormLabel,
  
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react-use-disclosure';

import { Button,Heading } from '@chakra-ui/react'
import { useState ,useEffect} from "react";
import React from "react";
import axios from "axios";
import AdminAddProduct from "./AdminAddProduct";
import { Select } from '@chakra-ui/react';
import { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { AuthContext } from "../Context/AuthContext";
import { useRef } from "react";
//import Logout from './Logout';
function EditModal({id,category}){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const title = useRef(null)
  const image = useRef(null)
  const price = useRef(null)
  function handleEdit(id){
    let query={title:title.current.value,
      image:image.current.value,
      price:price.current.value
    }
    console.log(id,category)
    axios.patch(`http://localhost:3000/${category}/${id}`, {
     params: {
       q: query
     }
   })
   .then(function (response) {
     console.log(response.data);
     
   })
   .catch(function (error) {
     console.log(error);
   })
   .finally(function () {
     // always executed
   });
 
   }
  return <>
  <Button marginTop={50} marginBottom={50} colorScheme='blue' onClick={onOpen}>Edit</Button>
            <Modal
              // initialFocusRef={email}
              // finalFocusRef={password}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Please enter Title</FormLabel>
                    <Input ref={title} placeholder='Title' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Please enter ImageUrl</FormLabel>
                    <Input ref={image} placeholder='ImageUrl' />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Please enter Price</FormLabel>
                    <Input ref={price} placeholder='Price' />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button onClick={()=>handleEdit(id)} colorScheme='blue' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal></>
}

export default function AdminPage() {
 
  const [category,setcategory]=useState("")
  const{authState,loginUser ,logoutUser}=useContext(AuthContext)
const[data,setData]=useState([])


function getData(){
  if(category){
    axios.get(`http://localhost:3000/${category}`)
    .then(function (response) {
      setData(response.data)
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   }
  
}
useEffect(()=>{
  getData()
},[category])
  const handleOnchange=(e)=>{
   let query=e.target.value
   console.log(query)
   axios.get(`http://localhost:3000/${category}`, {
    params: {
      q: query
    }
  })
  .then(function (response) {
    setData(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })

  }
  
 function handleDelete(id){
  axios.delete(`http://localhost:3000/${category}/${id}`)
  .then(function (response) {
    console.log(response);
    getData()
  })
  .catch(function (error) {
    console.log(error);
  })
 }
 
  return (
    <div >
        <Button onClick={logoutUser} colorScheme='blue'>LogOut</Button>
        <Select placeholder='Select option' w='20%' m='auto' mt='30px' value={category} onChange={(e)=>setcategory(e.target.value)}> 
  <option value='mens'>Mens Collection</option>
  <option value='womens'>Womens Collection</option>
  <option value='tabbycollection'>Tabby Collection</option>
</Select>
         <AdminAddProduct category={category}/>
        
        <Input width={500} marginTop="20px" className = "searchAddress"  placeholder = "Search Data" onChange={handleOnchange}/>

        
        <TableContainer whiteSpace="wrap">
          <Table className="table">
            <Thead >
              <Tr>
                {/* <Th><Heading as='h4' size='md'>Brand</Heading></Th> */}
                <Th><Heading as='h4' size='md'>Title</Heading></Th>
                <Th><Heading as='h4' size='md'>Image</Heading></Th>
                <Th><Heading as='h4' size='md'>Price</Heading></Th>
                <Th><Heading as='h4' size='md'>Edit</Heading></Th>
                <Th><Heading as='h4' size='md'>Delete Item</Heading></Th>
              </Tr>
            </Thead>
            <Tbody> 
              {data.map((el)=> (
                <Tr key={el.id} className = "houseDetails"  >
                {/* <Td  className = "name" >{el.brand}</Td> */}
                <Td className = "ownersName" >{el.title}</Td>
                <Td  className = "address" ><Image width="30%"  src={el.image}></Image></Td>
                <Td className = "areaCode" >Rs {el.price}</Td>
                <Td _hover={{cursor:"pointer"}} className = "edit"  >
                  {/* <Button colorScheme="blue">Edit</Button>  */}<EditModal id={el.id} category={category}/ >
                
                  
                 </Td>
                <Td _hover={{cursor:"pointer"}} className = "delete"  ><Button onClick={()=>handleDelete(el.id)} colorScheme="blue">Delete</Button>  </Td>
            </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
    </div>
  )
}



