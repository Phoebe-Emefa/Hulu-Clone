import {Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/core'
import {InfoOutlineIcon} from '@chakra-ui/icons'
import React from 'react'

const Table = () => {
  return (
    <Box as="table" w={{md:"70%"}} mx="auto" mb={{md: 2}} >
      <Flex as="tr" justify="space-between" zIndex={1000} borderBottomWidth="1px" borderBottomColor="gray.200" pb={4} >
      <Flex as="td" direction="column" pt={{md:8}} w={{md: 385}}>
        <Heading as="h2" fontSize="3xl" mb={{md: 4}} mt={{md: 10}}>Select Your Plan</Heading>
        <Text >No hidden fees, equipment rentals, or installation appointments.</Text>
        <Heading as="h6" fontSize="md" mt={1}>Switch plans or cancel anytime.**</Heading>
      </Flex>
      <Flex as="td" direction="column" align="center" pt={{md:8}} w={{md: 180}}>
        <Heading as="h6" fontSize="sm" bg="gray.600" color="#fff" rounded={13} py={1} px={3} >MOST POPULAR</Heading>
        <Heading as="h3" fontSize="xl" my={{md: 3}}>Hulu</Heading>
        <Heading as="h5" fontSize="md" fontWeight="medium" color="gray.500" mb={{md: 4}}>30 DAY FREE TRIAL</Heading>
        <Button bg= "#000" color="#fff" fontWeight="bold" colorScheme="none" _hover={{opacity:"0.7" }}  w={{md: 165}} h={{md: 12}} >TRY FOR $0</Button>
        
      </Flex>
      <Flex as="td" direction="column" align="center"bg="gray.100" px={{md:3}} pt={{md:8}} px={3} w={{md: 180}} >
      <Heading as="h3" fontSize="xl" mt={{md: 8}} pt={1}>Hulu(No Ads)</Heading>
        <Heading as="h5" fontSize="md" fontWeight="medium" color="gray.500" my={{md: 3}}  >30 DAY FREE TRIAL</Heading>
        <Button bg= "#000" color="#fff" fontWeight="bold" colorScheme="none" _hover={{opacity:"0.7" }} w={{md: 165}}  mt={1} h={{md: 12}} >TRY FOR $0</Button>
      </Flex>
      <Flex as="td" direction="column" align="center" pt={{md:8}} px={3} w={{md: 180}}>
      <Heading as="h3" fontSize="xl" mt={{md: 8}} pt={1}>Hulu + Live TV</Heading>
        <Heading as="h5" fontSize="md" fontWeight="medium" color="gray.500" my={{md: 3}}>7 DAY FREE TRIAL</Heading>
        <Button bg= "#000" color="#fff" fontWeight="bold" colorScheme="none" _hover={{opacity:"0.7" }} h={{md: 12}} w={{md: 165}} mt={1}>TRY FOR $0</Button>
      </Flex>
    </Flex>

    <Flex as="tr" justify="space-between" borderBottomWidth="1px" borderBottomColor="gray.200" py={4} >
      <Box as="td" w={{md: 385}}>Monthly price after free trial</Box>
      <Box w={{md: 180}} fontSize="xl" align="center" >$5.99/mo</Box>
      <Box w={{md: 180}} fontSize="xl" align="center">$11.99/mo</Box>
      <Box w={{md: 180}} fontSize="xl" align="center">$54.99/mo</Box>
    </Flex>

    <Flex as="tr" justify="space-between" align="center" borderBottomWidth="1px" borderBottomColor="gray.200" py={4} >
      <Box as="td" w={{md: 385}}>
        <Text w={{md: 360}} >Streaming Library of 80,000+ TV episodes and movies <InfoOutlineIcon/></Text>
        
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
        </Box>
      <Box w={{md: 180}} align="center"><Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" /></Box>
    </Flex>

    <Flex as="tr" justify="space-between" borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
      <Flex as="td" w={{md: 385}} >
        <Text>Most new episodes the day after they air*</Text>
      </Flex>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
        </Box>
      <Box w={{md: 180}} align="center"><Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" /></Box>
    </Flex>

    <Flex as="tr" justify="space-between" borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
      <Flex as="td" w={{md: 385}} >
        <Text>Access to award-winning Hulu Originals</Text>
      </Flex>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
        </Box>
      <Box w={{md: 180}} align="center"><Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" /></Box>
    </Flex>

    <Flex as="tr" justify="space-between" borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
      <Flex as="td" w={{md: 385}} >
        <Text>Watch on your TV, laptop, phone, or tablet</Text>
      </Flex>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
        </Box>
      <Box w={{md: 180}} align="center"><Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" /></Box>
    </Flex>

    <Flex as="tr" justify="space-between" borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
      <Flex as="td" w={{md: 385}} >
        <Text>Up to 6 user profiles <InfoOutlineIcon/></Text>
      </Flex>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
        </Box>
      <Box w={{md: 180}} align="center"><Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" /></Box>
    </Flex>

    <Flex as="tr" justify="space-between" borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
      <Flex as="td" w={{md: 385}} >
        <Text>Watch on 2 different screens at the same time</Text>
      </Flex>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
        </Box>
      <Box w={{md: 180}} align="center"><Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" /></Box>
    </Flex>

    <Flex as="tr" justify="space-between" borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
      <Flex as="td" w={{md: 385}} >
        <Text>No ads in streaming library <InfoOutlineIcon/></Text>
      </Flex>
      <Box w={{md: 180}} align="center" color="#B8BECC"   > 
      <Flex w={{md: 4}} borderBottomWidth="2px" borderBottomColor="#B8BECC" mt={{md:3}} ></Flex>
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
        </Box>
        <Box w={{md: 180}} align="center" color="#B8BECC"   > 
      <Flex w={{md: 4}} borderBottomWidth="2px" borderBottomColor="#B8BECC" mt={{md:3}} ></Flex>
      </Box>
    </Flex>

    <Flex as="tr" justify="space-between" borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
      <Flex as="td" w={{md: 385}} >
        <Text>Download and watch <InfoOutlineIcon/> </Text>
      </Flex>
      <Box w={{md: 180}} align="center" color="#B8BECC"   > 
      <Flex w={{md: 4}} borderBottomWidth="2px" borderBottomColor="#B8BECC" mt={{md:3}} ></Flex>
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
        </Box>
        <Box w={{md: 180}} align="center" color="#B8BECC"   > 
      <Flex w={{md: 4}} borderBottomWidth="2px" borderBottomColor="#B8BECC" mt={{md:3}} ></Flex>
      </Box>
    </Flex>

    <Flex as="tr" justify="space-between" borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
      <Flex as="td" w={{md: 385}} >
        <Text>Live TV with 65+ top channels. No cable required. <InfoOutlineIcon/> </Text>
      </Flex>
      <Box w={{md: 180}} align="center" color="#B8BECC"   > 
      <Flex w={{md: 4}} borderBottomWidth="2px" borderBottomColor="#B8BECC" mt={{md:3}} ></Flex>
      </Box>
      <Box w={{md: 180}} align="center" color="#B8BECC"   > 
      <Flex w={{md: 4}} borderBottomWidth="2px" borderBottomColor="#B8BECC" mt={{md:3}} ></Flex>
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
        </Box> 
    </Flex> 

    <Flex as="tr" justify="space-between" borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
      <Flex as="td" w={{md: 385}} >
        <Text>Live TV guide to navigate channels </Text>
      </Flex>
      <Box w={{md: 180}} align="center" color="#B8BECC"   > 
      <Flex w={{md: 4}} borderBottomWidth="2px" borderBottomColor="#B8BECC" mt={{md:3}} ></Flex>
      </Box>
      <Box w={{md: 180}} align="center" color="#B8BECC"   > 
      <Flex w={{md: 4}} borderBottomWidth="2px" borderBottomColor="#B8BECC" mt={{md:3}} ></Flex>
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
        </Box> 
    </Flex> 

    <Flex as="tr" justify="space-between" borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
      <Flex as="td" w={{md: 385}} >
        <Text>Record Live TV with 50 hours of Cloud DVR storage</Text>
      </Flex>
      <Box w={{md: 180}} align="center" color="#B8BECC"   > 
      <Flex w={{md: 4}} borderBottomWidth="2px" borderBottomColor="#B8BECC" mt={{md:3}} ></Flex>
      </Box>
      <Box w={{md: 180}} align="center" color="#B8BECC"   > 
      <Flex w={{md: 4}} borderBottomWidth="2px" borderBottomColor="#B8BECC" mt={{md:3}} ></Flex>
      </Box>
      <Box w={{md: 180}} align="center">
        <Image src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_black.svg" />
        </Box> 
    </Flex>

    <Flex pt={{md:2}} pb={{md: 16}} direction="column" borderBottomWidth="1px" borderBottomColor="gray.200"><Text fontSize="xs">*For current-season shows in the streaming library only</Text>
<Text fontSize="xs">**Switches from Live TV to Hulu take effect as of the next billing cycle</Text></Flex> 
    </Box>
  )
}

export default Table
