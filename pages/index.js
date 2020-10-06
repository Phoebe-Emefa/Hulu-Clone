import { Box } from '@chakra-ui/core'
import React from 'react'
import Banner from '../Components/Home/Banner'
import Trial from '../Components/Home/Trial'
import Trend from '../Components/Home/Trend'
import Plan from '../Components/Home/Table'
import Table from '../Components/Home/Table'

const Home = () => {
  return (
    <Box>
      <Trial />
      <Banner />
      <Trend />
      <Table />
    </Box>
  )
}

export default Home
