import { Heading ,Button,Image,Box,HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { StarIcon } from "@chakra-ui/icons";
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
<Box direction='row' boxSize='350px' display='flex' border="3px" gap='20px' marginLeft='150px' marginTop='60px'>
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
<HStack bg='#E2E8F0' w='100%' h='250px' marginTop='100px'>
  <Box  w="33%" h='200px'> 
  <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
  <Heading as='h4' size='md' marginTop='10px'>
   The Tabby Shoulder Bag <br/> 26
  </Heading>
  <Heading as='h6' size='xs' marginTop='10px'>
  "Glad I decided to go for it. It is such a beauty...<br/> very elegant, simple, and sophisticated; yet still fun <br/> to carry."<br/> —thammy
  </Heading>
  <Button _hover={{bg:'black',color:'white'}} h='30px' colorScheme='white' borderColor='black' borderWidth='1px' borderRadius='1px' color='black'marginTop='10px' marginLeft='10px' fontSize='13px'>SEE IT NOW</Button>
  </Box>

  <Box  w="33%" h='200px'> 
  <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
  <Heading as='h4' size='md' marginTop='10px'>
  The Pillow Tabby Shoulder <br/> Bag 18
  </Heading>
  <Heading as='h6' size='xs' marginTop='10px'>
  "Glad I decided to go for it. It is such a beauty...<br/> very elegant, simple, and sophisticated; yet still fun <br/> to carry."<br/> —thammy
  </Heading>
  <Button _hover={{bg:'black',color:'white'}} h='30px' colorScheme='white' borderColor='black' borderWidth='1px' borderRadius='1px' color='black'marginTop='10px' marginLeft='10px' fontSize='13px'>SEE IT NOW</Button>
  </Box>

  <Box  w="33%" h='200px'> 
  <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
  <Heading as='h4' size='md' marginTop='10px'>
   The Tabby Shoulder Bag <br/> 26
  </Heading>
  <Heading as='h6' size='xs' marginTop='10px'>
  "Glad I decided to go for it. It is such a beauty...<br/> very elegant, simple, and sophisticated; yet still fun <br/> to carry."<br/> —thammy
  </Heading>
  <Button _hover={{bg:'black',color:'white'}} h='30px' colorScheme='white' borderColor='black' borderWidth='1px' borderRadius='1px' color='black'marginTop='10px' marginLeft='10px' fontSize='13px'>SEE IT NOW</Button>
  </Box>
</HStack>
    </div>
}
export default LandingPage