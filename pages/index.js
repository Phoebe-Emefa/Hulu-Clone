import { Box } from '@chakra-ui/core'
import React from 'react'
import Banner from '../Components/Home/Banner'
import Trial from '../Components/Home/Trial'
import Trend from '../Components/Home/Trend'
import Plan from '../Components/Home/Plan'

const Home = () => {
  return (
    <Box>
      <Trial />
      <Banner />
      <Trend />
      <Plan />
    </Box>
  )
}

export default Home
