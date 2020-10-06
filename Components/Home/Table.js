import {Box, Button, Flex, Heading, Text } from '@chakra-ui/core'
import React from 'react'

const Table = () => {
  return (
    <Box w={{md:"70%"}} mx="auto" mb={{md: 2}} >
      <Flex justify="space-between" >
      <Flex direction="column" pt={{md:8}}>
        <Heading as="h2" fontSize="3xl" mb={{md: 4}} mt={{md: 10}}>Select Your Plan</Heading>
        <Text w={{md: 385}} >No hidden fees, equipment rentals, or installation appointments.</Text>
        <Heading as="h6" fontSize="md" mt={1}>Switch plans or cancel anytime.**</Heading>
      </Flex>
      <Flex direction="column" align="center" pt={{md:8}}>
        <Heading as="h6" fontSize="sm" bg="gray.600" color="#fff" rounded={13} py={1} px={3} >MOST POPULAR</Heading>
        <Heading as="h3" fontSize="xl" my={{md: 3}}>Hulu</Heading>
        <Heading as="h5" fontSize="md" fontWeight="medium" color="gray.500" mb={{md: 4}}>30 DAY FREE TRIAL</Heading>
        <Button bg= "#000" color="#fff" fontWeight="bold" colorScheme="none" _hover={{opacity:"0.8" }}  w={{md: 165}} h={{md: 12}} >TRY FOR $0</Button>
        
      </Flex>
      <Flex direction="column" align="center"bg="gray.100" px={{md:3}} pt={{md:8}} px={3} >
      <Heading as="h3" fontSize="xl" mt={{md: 8}} pt={1}>Hulu(No Ads)</Heading>
        <Heading as="h5" fontSize="md" fontWeight="medium" color="gray.500" my={{md: 3}}  >30 DAY FREE TRIAL</Heading>
        <Button bg= "#000" color="#fff" fontWeight="bold" colorScheme="none" _hover={{opacity:"0.8" }} w={{md: 165}}  mt={1} h={{md: 12}} >TRY FOR $0</Button>
      </Flex>
      <Flex direction="column" align="center" pt={{md:8}} px={3}>
      <Heading as="h3" fontSize="xl" mt={{md: 8}} pt={1}>Hulu + Live TV</Heading>
        <Heading as="h5" fontSize="md" fontWeight="medium" color="gray.500" my={{md: 3}}>7 DAY FREE TRIAL</Heading>
        <Button bg= "#000" color="#fff" fontWeight="bold" colorScheme="none" _hover={{opacity:"0.8" }} h={{md: 12}} w={{md: 165}} mt={1}>TRY FOR $0</Button>
      </Flex>
    </Flex>
    </Box>
  )
}

export default Table
