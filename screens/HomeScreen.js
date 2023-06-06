import { View, Text, Image,TouchableOpacity, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native' ;
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage } from '../assets';


import { styled } from 'nativewind';

const StyledView = styled(View)

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false,
    });
  },[]);
    return (
  <SafeAreaView className="bg-white flex-1 relative">
   
    {/* First Section */}
    <StyledView className="flex-row px-6 mt-8 space-x-2 items-center">
        <StyledView className="w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text></StyledView>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
    </StyledView>
    
    {/* Second Section */}
    <StyledView className="px-6 mt-8 space-y-3">
        <Text className="text-4xl text-[#3C6072]">Enjoy the trip With</Text>
        <Text className="text-4xl text-[#00BCC9] font-bold">Good Moments</Text>
        <Text className="text-[#3C6072] text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Text>
    </StyledView>

    {/* Circle Section */}
    <StyledView  className="w-96 h-96 bg-[#00BCC9] absolute -z-50 rounded-full bottom-14 -right-36"></StyledView>
    <StyledView className="w-96 h-96 bg-[#E99265] absolute -z-50 rounded-full -bottom-36 -left-36"></StyledView>

    {/* Img container */}
    <StyledView className="flex-1 relative items-center justify-center ">
        <Animatable.Image 
        animation='fadeIn'
        easing='ease-in-out'
        source={HeroImage}
        className="w-full h-full mt-20"
        resizeMode="contain"
        />
        <TouchableOpacity
        onPress={()=>navigation.navigate("Discover")}
        className="absolute bottom-20 w-24 h-24 bg-[#333] border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
            <Animatable.View 
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 rounded-full items-center justify-center bg-[#00BCC9]">
                <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
            </Animatable.View>
        </TouchableOpacity>
    </StyledView>
  
  </SafeAreaView>
  )
}

export default HomeScreen