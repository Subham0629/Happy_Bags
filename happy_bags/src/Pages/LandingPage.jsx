import { Heading ,Button,Image,Box,HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function LandingPage(){
    return<div>
        <Heading size='3xl' marginTop="70px">Pick up the Tab.</Heading>
        <Heading as='h4' size='md' color='gray'marginTop='20px'>
        Bestselling Tabby 26 bags, upgraded in silkier, softer, even-better leather.
  </Heading>
  <Button _hover={{bg:'black',color:'white'}} colorScheme='white' borderColor='black' borderWidth='1px' borderRadius='1px' color='black' marginTop='20px' fontSize='13px'>SEE THE TABBY COLLECTION</Button>
  <Button _hover={{bg:'black',color:'white'}} colorScheme='white' borderColor='black' borderWidth='1px' borderRadius='1px' color='black'marginTop='20px' marginLeft='10px' fontSize='13px'>SEE ALL NEW BAGS</Button>
  
  <Link to="/Tabbycollection"><Box marginTop='40px' boxSize='100%'>
  <Image src='https://cms.coach.com/i/coach/0216-hero-desktop?&w=1920&sm=aspect&aspect=1600:992&fmt=webp&$qlt_med$' alt='Dan Abramov' />
</Box></Link>
<Heading size='3xl' marginTop="70px">Unlimited ways to wear Tabby.</Heading>
<Button _hover={{bg:'black',color:'white'}} colorScheme='white' borderColor='black' borderWidth='1px' borderRadius='1px' color='black' marginTop='20px' fontSize='13px'>SEE ALL TABBY BAGS</Button>
<Box direction='row' boxSize='450px' display='flex' border="3px" gap='20px'>
  <Image
  //width='80%'
    //boxSize='100px'
    //objectFit='cover'
    src='https://cms.coach.com/i/coach/0216-anousshkaa?$poi$&w=640&fmt=webp&$qlt_med$'
    alt='Dan Abramov'
  />
  <Image
  //width='80%'
   // boxSize='150px'
    //objectFit='cover'
    src='https://cms.coach.com/i/coach/0216-sunflowervalentine?$poi$&w=640&fmt=webp&$qlt_med$'
    alt='Dan Abramov'
  />
  <Image 
  //width='80%'
  //\\boxSize='200px' 
  src='https://cms.coach.com/i/coach/0216-thefashionequation?$poi$&w=640&fmt=webp&$qlt_med$' alt='Dan Abramov' />
</Box>    
    </div>
}
export default LandingPage