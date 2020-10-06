import {  Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/core'
import React from 'react'

const Banner = () => {
  return (
    <Flex bg= "teal.800" align="center">
      <Box w={{md: 400}} p={{md: 6}} >
      <Image src="https://www.hulu.com/static/hitch/s3/2020-05/DPlus_Logo_0_1_2.png?Rj7zClAjpZ72iHJxfWDi4fkv3FcnDaB5" objectFit="fit" />
      </Box>
      <Flex direction="column" >
        <Heading as="h6" fontSize="sm" color="green.300" >BUNDLE AND SAVE OVER 25%</Heading>
        <Text fontSize="2xl" color="#fff" >Get Hulu, Disney+, and ESPN+ for $12.99/month.</Text>
        <Link color="#fff">More Details
        </Link>
      </Flex>
      <Flex direction="column" align="center" ml={{md: 210}}>
        <Button colorScheme="#fff" variant="outline" color="#fff" border="2px" px={{md: 4}} w={{md: 175}} h={{md: 12}} >GET BUNDLE</Button>
        <Link fontSize="xs" color="#fff" pt={1} >Terms Apply</Link>
      </Flex>
    </Flex>
  )
}

export default Banner
