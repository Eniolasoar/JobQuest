import { View, Text } from 'react-native'
import React from 'react'
import PopularCard from '../../components/PopularCard'

const PopularJobs = () => {
  return (
    <View className='mt-5'>
      <Text className='font-dmmedium text-2xl'>Popular Jobs</Text>
      <PopularCard/>
    </View>
  )
}

export default PopularJobs