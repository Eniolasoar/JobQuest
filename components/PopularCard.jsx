import { View, Text, Image } from "react-native";
import React from "react";
import { icons, images } from "../constants";

const PopularCard = () => {
  return (
    <View className="p-6 mt-5 bg-lightWhite rounded-3xl w-[80%]">
      <View className="flex-col space-y-2 items-start">
        <View className='w-full flex-row justify-between items-start'>
          <View className='flex-col space-y-3 items-start'>
            <View className="rounded-2xl bg-white p-3">
              <Image
                source={require("../assets/icons/google.png")}
                resizeMode="cover"
                className="w-9 h-9"
              />
            </View>
            <View>
              <Text className="font-dmmedium text-sm text-primary-200">Google</Text>
            </View>
          </View>
          <Image source={icons.heartOutline} resizeMode="cover" className="w-6 h-6"/>
        </View>
        <View>
            <Text className='text-xl font-dmbold'>Lead Product Manager</Text>
            <Text className='font-dmmedium text-primary-100'>$8k - <Text className='text-primary-200'>Tokyo, Japan</Text></Text>
        </View>
      </View>
    </View>
  );
};

export default PopularCard;
