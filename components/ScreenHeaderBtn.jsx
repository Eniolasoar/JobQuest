import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ScreenHeaderBtn = ({iconUrl,dimension}) => {
  return (
   <TouchableOpacity >
    <Image source={iconUrl} resizeMethod='cover' className='w-[30px] h-[30px] rounded-full '/>
   </TouchableOpacity>
  )
}

export default ScreenHeaderBtn