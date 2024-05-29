import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import icons from '../constants/icons'

const CustomButton = ({handlePress, text, color,extraStyles,value}) => {
  return (
   <TouchableOpacity onPress={handlePress} activeOpacity={0.7}
    className={` h-[62px] w-90% p-3 rounded-2xl ${color}  flex justify-center items-center ${extraStyles}`}>
        <View className='flex flex-row justify-center items-center'>
        <Text className='text-white font-dmmedium text-xl'>{text}</Text>
        {value === 'onboarding'? <Image source={require("../assets/images/right-arrow.png")}
        className='w-10 h-10 ml-2' resizeMethod='contain' /> : null}
        </View>
        
    </TouchableOpacity>
  )
}

export default CustomButton