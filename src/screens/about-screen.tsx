import React from 'react'
import {
  Box,
  Text,
  VStack,
  ScrollView,
  Image,
  useColorModeValue,
  Icon
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'
const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.png')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/takuya.jpg')}
              borderRadius="full"
              resizeMode="cover"
              alt="author of this app"
              w={120}
              h={120}
            />
          </Box>
          <Text fontSize="md" w="full" textAlign="center">
            This is a React Native RN tutorial built in the Youtube channel
            called DEVASLIFE
          </Text>
          <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href="https://www.youtube.com/devaslife"
            leftIcon={
              <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />
            }
          >
            {' '}
            Go to youtube channel
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}
export default AboutScreen
