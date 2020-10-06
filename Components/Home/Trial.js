import { Box,Button, Flex, Heading, Image, Text  } from '@chakra-ui/core'
import React from 'react'

const Trial = () => {
  return (
    <Box bgImage="linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('https://www.hulu.com/static/hitch/s3/2020-06/Homepage_Masthead_Test_DESKTOP_3200x1320-v4c_6.16.20.jpg?t.h4WwAhD1rrl9t1M_SYrNCgeYS_ON48')"
    bgSize="cover" alt="movie images">
      <Heading as="h6" fontSize="md" color="#fff" p={{md: 8}} align="right" >
        LOG IN
      </Heading>
      <Flex direction="column" justify="center" align="center" py={{md: 60}} >
        <Heading as="h6" fontSize="sm" color="green.300" mb={{md: 8}}>TRY UP TO ONE MONTH FREE</Heading>
        <Box w={{md: 250}} mb={{md: 4}}>
        <Image src="https://www.hulu.com/static/hitch/s3/2020-08/Hulu_Logo-01_newgreen.png" objectFit="fit" alt="hulu logo" />
        </Box>
        <Heading as="h5" fontSize="2xl"color="#fff" w={{md: 800}} align="center" mb={{md: 4}} >Watch thousands of shows and movies, with plans starting at $5.99/month.</Heading>
        <Text color="#fff" mb={{md: 4}}>HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
      </Text>
      <Button bg="#fff" size="lg" color="#000" fontSize="sm" fontWeight="bold"mb={{md: 4}} >
        START YOUR FREE TRIAL
      </Button>
      <Text fontSize="xs" color="#fff" >Free trial for new & eligible returning subscribers only.</Text>
      </Flex>
    </Box>
  )
}

export default Trial
