import { View, Text, Image, Alert } from 'react-native'
import React, { useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { router } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting,setIsSubmitting]=useState(false);
  
  const submit=async ()=>{
    // if(!form.email||!form.password){
    //   Alert.alert("Error","Please fill in all the fields");
    // }
    setIsSubmitting(true);
    try {
      // await signIn(form.email,form.password);
      // const result=await getCurrentUser();
      // setUser(true);
      // setIsLoggedin(true);
      // Alert.alert("Success","User signed in successfully");
      // console.log(isLoggedin);
      router.replace("/Home")
    } catch(error){
    return null;  
    }
    
    finally{
      setIsSubmitting(false)
}

   
  }
  return (
    <SafeAreaView className="bg-primary h-full ">
     <ScrollView >
      <View className="w-full justify-center min-h-[83vh] px-10 my-6 ">
         <Image source={require("../../assets/images/logo.png")} resizeMode='contain' className="w-[100px] h-[35px]"/>
         <Text className="text-2xl text-white font-semibold mt-4 text-semibold ">Log in to JobQuest</Text>
         <FormField
         title="Email"
         value={form.email}
         handleChangeText={(e)=>setForm({...form,email:e})}
         otherStyles="mt-7"
         keyboardType="email-address"
         />
         <FormField
         title="Password"
         value={form.password}
         handleChangeText={(e)=>setForm({...form,password:e})}
         otherStyles="mt-7"
         keyboardType="password"
         />
         <CustomButton text="Sign In" handlePress={submit} extraStyles="mt-7" color="bg-secondary" isLoading={isSubmitting}/>
         <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-white font-pregular">
            Don't have an account?
          </Text>
          <Link push href="/SignUp" className='text-lg font-psemibold text-secondary underline'>SignUp</Link>
         </View>
      </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn;