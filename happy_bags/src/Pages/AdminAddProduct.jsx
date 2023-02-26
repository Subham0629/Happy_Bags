import axios from "axios"
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {
  FormControl,
} from '@chakra-ui/react'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { useRef ,useState} from "react";

export default function AdminAddProduct({category}) {
    const[data,setData]=useState()
  let ownerval=useRef()
  let addressval=useRef()
  let codeval=useRef()
  const Submitdata=()=>{
    axios.post(`https://happybag-json-server.onrender.com/${category}`,{
      title: ownerval.current.value,
      image: addressval.current.value,
      price: codeval.current.value,
         })
         .then(function (response) {
            setData(response.data)
          console.log(response.data );
          ownerval.current.value=''
         addressval.current.value=''
          codeval.current.value=''
        })
        .catch(function (error) {
          console.log(error);
        })
  }
  console.log(data)
  return (
      <div className = "addHouseContainer" >
        <form className = "form" >
          <FormControl width={500} margin="auto"marginTop={10}>
              {/* <Input marginBottom={5} ref={nameval} onChange={()=>nameval.current.value} className = "name" placeholder = "Brand" /> */}
              <Input marginBottom={5} ref={ownerval} onChange={()=>ownerval.current.value} className = "ownerName" placeholder = "Title" />
              <Input marginBottom={5} ref={addressval} onChange={()=>addressval.current.value} className = "address" placeholder = "ImageUrl" />
              <Input marginBottom={5} ref={codeval} onChange={()=>codeval.current.value} className = "areaCode" placeholder = "Price" />
              {/* <Input marginBottom={5} ref={rentval} onChange={()=>rentval.current.value} className = "rent" placeholder = "Rating" /> */}
              <br />
              <Button colorScheme='blue' onClick={Submitdata} className = "submitBtn" > Add Product</Button>
          </FormControl>
        
        </form>
      {(data)?
      <Center key={data.id} py={12}>
    <Box  width={500} height={380} _hover={{cursor:"pointer"}}
      role={'group'}
      p={6}
      maxW={'330px'}
      w={'full'}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}>
      <Box
        rounded={'lg'}
        mt={-12}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}>
        <Image
          rounded={'lg'}
          height={230}
          width={282}
          objectFit={'cover'}
          src={data.image}
        />
      </Box>
      <Stack pt={10} align={'center'}>
        <Text color={'white.500'} fontSize={'sm'} textTransform={'uppercase'}>
          {data.brand}
        </Text>
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {data.title}
        </Heading>
        <Stack direction={'row'} align={'center'}>
          <Text fontWeight={800} fontSize={'xl'}>
            {data.price}
          </Text>
        </Stack>
        <Stack direction={'row'} align={'center'}>
          <Text fontWeight={800} fontSize={'md'}>
            Rating:{data.rating}
        
          </Text>
        </Stack>
      </Stack>
    </Box>
  </Center>:null}
      </div>
  )
}
