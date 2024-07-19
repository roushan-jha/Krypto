import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react';
import img1 from "../assets/btc.png";
import {motion} from "framer-motion";

const Home = () => {
  return (
    <Box w="full" h={"85vh"} bgColor={"blackAlpha.900"} >
      <motion.div style={{
        height:"80vh"
      }} animate={{
        translateY:"20px"
      }} transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror"
      }}>
        <Image w="full" h="full" objectFit={"contain"} src={img1} filter={"grayScale(1)"} />
      </motion.div>
      
      <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={"-20"} >Krypto</Text>
    </Box>
  )
}

export default Home;