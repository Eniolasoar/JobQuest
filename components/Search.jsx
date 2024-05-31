import { View, Text, TextInput, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { icons } from '../constants'

const Search = ({placeholder}) => {
  return (
    <View className='mt-3 space-y-1.5'>   
      <View className='flex-row w-full justify-between items-center '>
        <TextInput placeholder={placeholder} className='p-6 bg-[#F3F4F8] rounded-2xl w-full max-w-[80%] font-dmregular text-[17px] flex items-center justify-center' placeholderTextColor='#83829A' />
        <TouchableOpacity className='bg-secondary p-4 rounded-2xl'>
            <Image source={icons.search} resizeMode='contain' className='w-6 h-6'/>
        </TouchableOpacity>
      </View>
      <View className='flex-row gap-3 '>
        <TouchableOpacity className='border border-lightWhite p-3 rounded-full'><Text className='text-primary-200 font-dmregular '>Full-Time</Text></TouchableOpacity>
        <TouchableOpacity className='border border-lightWhite p-3 rounded-full'><Text className='text-primary-200 font-dmregular '>Remote</Text></TouchableOpacity>
        <TouchableOpacity className='border border-lightWhite p-3 rounded-full'><Text className='text-primary-200 font-dmregular '>Intern</Text></TouchableOpacity>
        <TouchableOpacity className='border border-lightWhite p-3 rounded-full'><Text className='text-primary-200 font-dmregular '>Contract</Text></TouchableOpacity>
        
      </View>
    </View>
  )
}

export default Search