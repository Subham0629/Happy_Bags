import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../Pages/Logout";
import Login from "../Pages/Login";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,
    Heading,
    Image,
    Grid,Center,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { useNavigate } from "react-router-dom";
  import { BsCartCheck } from "react-icons/bs";
  import { useState } from "react";

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
  
  export default function Navbar() {
    const { user, isAuthenticated, isLoading ,logout} = useAuth0();
    let navigatehome = useNavigate(); 
  const Imagehome = () =>{ 
    let path = `/`; 
    navigatehome(path);
  }
  let navigate = useNavigate(); 
  const Gotocart = () =>{ 
    let path = `/CartAdd`; 
    navigate(path);
  }
  let nav = useNavigate(); 
  const GotoAdmin = () =>{ 
    let path = `/Adminlogin`; 
    nav(path);
  }

    const { isOpen, onToggle } = useDisclosure();
    const[data,setData]=useState([])
    const handleOnchange=(e)=>{
      let query=e.target.value
      console.log(query)
      axios.get(`https://happybag-json-server.onrender.com/mens`, {
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
  
    return (
      <>
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text  _hover={{cursor:'pointer'}}  
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <Image  width="50px"  onClick={Imagehome} src="https://i.ibb.co/vkkdCG7/Happy-Bags.png" alt="logo" />
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Input marginRight={100}  w={500} fontSize="18px" placeholder='Search for Products' onChange={handleOnchange}/>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
               {isAuthenticated && <Heading as="h6" size='sm' color="black">Welcome, {user.nickname}</Heading>}
          {isAuthenticated ? <Logout/> :<Login/>}
            {/* <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button> */}
            {/* <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button> */}
            <Box _hover={{cursor:"pointer"}}>
            <BsCartCheck  color="black" onClick={Gotocart} fontSize="30px"/>
            </Box>
            <Button onClick={GotoAdmin}
            display={{ base: 'inline-flex', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Admin
          </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>

      <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6} >
        {data?.map((el)=>  (
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
                {/* onClick={()=>AddToCart(el.id,el.image,el.title,el.price)} */}
            Add to cart
          </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
      ))}
      </Grid>
      </>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} pt="12px">
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  const NAV_ITEMS = [
    {
      label: 'THE TABBY SHOP',
      href: 'Tabbycollection',
    },
    {
      label: 'WOMEN',
      href: 'Womens',
    },
    {
        label: 'MEN',
        href: 'Mens',
      },
  ];