import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { COLORS, icons, images } from '../../constants'
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn'
const _layout = () => {
  return (
  <Stack>
    <Stack.Screen name='Home' options={{ headerStyle:{backgroundColor:'white'},headerShadowVisible:false,headerLeft:()=>(
        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
    ),headerRight:()=>(        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
) ,headerTitle:''}} />
  </Stack>
  )
}

export default _layout