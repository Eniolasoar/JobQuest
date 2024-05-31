import { View, Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Search from '../../components/Search'
import PopularJobs from './PopularJobs'

const Home = () => {
  StatusBar.setBarStyle('dark-content')
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView contentContainerStyle={{height:'100%'}} showsVerticalScrollIndicator={false}>
<View className='px-4 space-y-2 '>

      <Text className='text-xl text-primary-100 font-dmregular'>Hello EniDev</Text>
      <Text className='text-3xl font-dmbold text-primary'>Find your perfect job</Text>

      <Search placeholder='What are you looking for ?'/>
      
      <PopularJobs/>
</View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home