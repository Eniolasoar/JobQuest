import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { StatusBar } from 'react-native';
// import "react-native-reanimated";
SplashScreen.preventAutoHideAsync;
const _layout = () => {
    const [fontsLoaded,error]=useFonts({
        'DMSans-Regular':require('../assets/fonts/DMSans-Regular.ttf'),
        'DMSans-Medium':require('../assets/fonts/DMSans-Medium.ttf'),
        'DMSans-Bold':require('../assets/fonts/DMSans-Bold.ttf')
    })
    useEffect(()=>{
        if(error) console.log('Fonts not loaded')
        if(fontsLoaded) SplashScreen.hideAsync()
       

    },[fontsLoaded,error])

    StatusBar.setBarStyle("light-content");

  return (
    
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack>

  )
}

export default _layout