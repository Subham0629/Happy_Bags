

import axios from "axios";
import {useState,useEffect  } from "react"; 
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
  import { Grid } from '@chakra-ui/react'
  function AddToCart(id,image,title,price){
    axios.post("http://localhost:3000/cart", {
      id,image,title,price
    })
    .then(function (response) {
      console.log(response);
      alert("Item added to Cart")
    })
    .catch(function (error) {
      console.log(error);
    });
  }

function Mens(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/mens')
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },[])
     return (
    <> <Heading marginTop='40px' textAlign='left'>MEN'S STYLES</Heading>
    <Stack bg='#E2E8F0' w='100%' h='350px' marginTop='20px' marginBottom='30px'>
    <Heading paddingTop='30px'>Men’s View All</Heading>
    <Grid padding='50px' templateColumns='repeat(5, 1fr)' gap={6}>
      
      <Box >
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/ce477_blk_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading marginRight='70px' fontWeight='hairline' fontSize='15px'>Handbags</Heading>
      </Box>
      <Box>
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/97739_blk_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading marginRight='70px' fontWeight='hairline' fontSize='15px'>WALLETS
</Heading>
      </Box>
      <Box>
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/69167_blk_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading marginRight='70px' fontWeight='hairline' fontSize='15px'>CLOTHES</Heading>
      </Box>
      <Box>
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/g5015_cqbk_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading marginRight='70px' fontWeight='hairline' fontSize='15px'>SHOES</Heading>
      </Box>
      <Box>
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/64099_bkma_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading marginRight='70px' fontWeight='hairline' fontSize='15px'>ACCESSORIES</Heading>
      </Box>
      </Grid>
    </Stack>
     <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {data.map((el)=>  (
        <Center key={el.id} py={12}>
          <Box  _hover={{bg:"gray",cursor:"pointer"}}
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
                src={el.image}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {el.brand}
              </Text> */}
              <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>
                {el.title}
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={800} fontSize={'xl'}>
                  {el.price}
                </Text>
                {/* <Text textDecoration={'line-through'} color={'gray.600'}>
                  {el.price+1000}
                </Text> */}
              </Stack>  
              <Stack direction={'row'} align={'center'}>
              <Button onClick={()=>AddToCart(el.id,el.image,el.title,el.price)} variant='outline' colorScheme='blue'>
                {/* onClick={()=>AddToCart(el.id,el.image,el.title,el.price)} */}
            Add to cart
          </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
      ))}
      </Grid></> )
    }
    export default Mens