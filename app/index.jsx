import { Image, StatusBar } from "react-native";
import Lottie from "lottie-react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

export default function Page() {
  StatusBar.setBarStyle("dark-content");

  return (
    // <SafeAreaView className='h-full'>
    //   {/* <LottieView source={require('../assets/lottie.json')} autoPlay loop></LottieView> */}
    //   <Text>Open up App.js to start working on your app!</Text>
    // </SafeAreaView>
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="h-full flex  bg-gray w-full">
          <View className="space-y-5 mt-5">
            <Image
              resizeMethod="resize"
              source={require("../assets/images/logo.png")}
              alt=""
              className="mx-auto"
            />
            <Lottie
              source={require("../assets/lottie.json")}
              autoPlay
              className="w-[400px] h-[300px]"
            />
          </View>
          <View
            className="p-4 pt-10 rounded-[20px] bg-white shadow-lg h-full "
          >
            <View className='flex justify-between w-full space-y-3'>
            <Text className="font-dmbold text-3xl text-primary ">
              Find a perfect
              {"\n"}job match{" "}
            </Text>
            <Text className="font-dmregular text-[22px] text-primary-100">
              Finding your dream job is much more easier and faster like never
              before
            </Text>
            <CustomButton
            value='onboarding'
              text="Let's get started"
              color="bg-secondary"
              handlePress={()=>{router.push('/SignIn')}}
              extraStyles={"mt-5"}
            />
            </View>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
