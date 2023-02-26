

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
    axios.post("https://happybag-json-server.onrender.com/cart", {
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

function Tabbycollection(){
    const [data,setData]=useState([])
    const [sort,setsort]=useState("")
    useEffect(()=>{
      if(sort){
        axios.get(`https://happybag-json-server.onrender.com/tabbycollection?_sort=price&_order=${sort}`)
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      }else{
        axios.get(`https://happybag-json-server.onrender.com/tabbycollection`)
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      }
    },[sort])
     return (
    <> 
   <Heading marginTop='40px' textAlign='left'>TABBY COLLECTION</Heading>
    <Stack bg='#E2E8F0' w='100%' h='auto' marginTop='20px' marginBottom='30px'>
    <Heading paddingTop='30px'>Explore All Tabby Styles</Heading>
    <Grid padding='20px' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(7, 1fr)' }} gap={6}>
      
      <Box >
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/ch857_b4bk_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading  fontWeight='hairline' fontSize='15px'>The Tabby Shoulder Bag 26
</Heading>
      </Box>
      <Box>
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/ce772_b4bk_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading  fontWeight='hairline' fontSize='15px'>The Tabby Chain Clutch

</Heading>
      </Box>
      <Box>
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/c4823_v5blk_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading fontWeight='hairline' fontSize='15px'>The Soft Tabby Shoulder Bag
</Heading>
      </Box>
      <Box>
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/c3880_b4iy_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading  fontWeight='hairline' fontSize='15px'>The Pillow Tabby Shoulder Bag 18
</Heading>
      </Box>
      <Box>
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/c0772_lhblk_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading fontWeight='hairline' fontSize='15px'>The Pillow Tabby Shoulder Bag 26
</Heading>
      </Box>
      <Box>
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/ca193_b4ha_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading  fontWeight='hairline' fontSize='15px'>The Tabby Medium Wallet

</Heading>
      </Box>
      <Box>
      <Image
       borderRadius='full'
       boxSize='150px'
       src='https://images.coach.com/is/image/Coach/c8431_jiblk_a0?$desktopProductTile$'
       alt='Dan Abramov'
      />
      <Heading fontWeight='hairline' fontSize='15px'>The Soft Tabby Messenger
</Heading>
      </Box>
      </Grid>
    </Stack>
    <Button _hover={{bg:'black',color:'white'}} colorScheme='white' borderColor='black' borderWidth='1px' borderRadius='1px' color='black' marginTop='20px' fontSize='13px'
    onClick={()=>setsort("asc")}
    isDisabled={sort==="asc"}
    >Price Low To High</Button>
  <Button _hover={{bg:'black',color:'white'}} colorScheme='white' borderColor='black' borderWidth='1px' borderRadius='1px' color='black'marginTop='20px' marginLeft='10px' fontSize='13px'
  onClick={()=>setsort("desc")}
  isDisabled={sort==="desc"}
  >Price High To Low</Button>
     <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6}>
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
                ${el.price}
                </Text>
                {/* <Text textDecoration={'line-through'} color={'gray.600'}>
                  {el.price+1000}
                </Text> */}
              </Stack>  
              <Stack direction={'row'} align={'center'}>
              <Button onClick={()=>AddToCart(el.id,el.image,el.title,el.price)} variant='outline' colorScheme='blue'>
                {/* onClick={()=>AddToCart(el.id,el.image,el.brand,el.title,el.price,el.rating)} */}
            Add to cart
          </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
      ))}
      </Grid></> )
    }
    export default Tabbycollection