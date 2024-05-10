import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function AboutUs() {
  return (
    <div>
      <div className="w-full" style={{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:"url('https://images.ctfassets.net/vwt5n1ljn95x/7HPDZ9q1T97pc2y3MalyoZ/522918fb3e0163ac7b8c9344cfe48577/03_TaskRabbit-HomeRepair_022_1.png?w=1920&q=75&fm=webp')"}}>
        <h1 className='text-white text-5xl text-center auto p-40 font-bold'>About Us</h1>
      </div>
      {/* <div className='text-center'>
        <h1>Connecting Skills, Creating Community: Welcome to Skillify</h1>
        <p>
        Skillify– a platform where you can trade skills and services without spending a money!
        <br /> We're all about connecting people who have different talents, letting you swap what you're good at for something you need. Inspired by other helpful platforms like TaskRabbit and old-school barter communities, we're here to make trading skills easy and fun. <br />

Our goal is simple: to bring people together through skill-sharing. Whether you're a master baker, a coding whiz, or a DIY expert, everyone has something valuable to offer. With Skillify, you can list your skills, find what you need, and arrange trades with others in the community. It's all about mutual support and building connections.

We're excited to help you discover new talents, make friends, and build a stronger community. So join us on Skillify and let's start swapping!
        </p>
      </div> */}
      <div className='mt-10'>
      <h1 className=' text-3xl text-center font-bold'>Connecting Skills, Creating Community: Welcome to Skillify</h1>
      <div style={{border:"2px solid"}} className='mt-8 w-full'>
     <Flex maxW={"100%"} alignItems={"center"} justifyContent={"center"}>
      <Box border={"2px solid"} w="80%">
        <Text> Skillify– a platform where you can trade skills and services without spending a money!
      </Text>
      <Text>
      We're all about connecting people who have different talents, letting you swap what you're good at for something you need. Inspired by other helpful platforms like TaskRabbit and old-school barter communities, we're here to make trading skills easy and fun.
      </Text>
         <br />

Our goal is simple: to bring people together through skill-sharing. Whether you're a master baker, a coding whiz, or a DIY expert, everyone has something valuable to offer. With Skillify, you can list your skills, find what you need, and arrange trades with others in the community. It's all about mutual support and building connections.

We're excited to help you discover new talents, make friends, and build a stronger community. So join us on Skillify and let's start swapping!"
</Box>
     </Flex>
      </div>
      </div>
    </div>
  )
}

export default AboutUs
