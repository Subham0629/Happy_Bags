import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { CartItem } from './CartItem'
  import { CartOrderSummary } from './CartOrderSummary'
  //import { cartData } from './_data'
  import { useState,useEffect } from "react";
  import axios from "axios";
  
 function CartAdd () {
    const [cartData,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/cart')
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },[])
   
    return <Box
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart 
          </Heading>
  
          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link href='/' color={mode('blue.500', 'blue.200')}><Text>Continue Shopping</Text> </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  }
  export default CartAdd