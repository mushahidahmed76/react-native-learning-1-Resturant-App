import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState }  from 'react'
import {useNavigation} from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Attractions, Avatar, Hotels, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons'; 
import ItemCardContainer from '../components/ItemCardContainer';


const Discover = () => {
    const navigation = useNavigation();
    const [type, setType] = useState("hotels");

    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false,
      });
    },[]);
    return (
    <SafeAreaView className='flex-1 relative bg-white'>
        <View className='flex-row items-center justify-between px-8'>
            <View>
                <Text className='text-4xl text-[#0B646B] font-bold'>Discover</Text>
                <Text className='text-3xl text-[#527283]'>the beauty today</Text>
            </View>
            <View className='shadow-lg w-12 h-12 bg-gray-400 items-center justify-center rounded-md'>
                <Image
                className='w-full h-full rounded-md object-cover'
                source={Avatar}
                />
            </View>
        </View>
        <View className="flex-row items-center bg-white rounded-xl mx-4 py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{ fields: "geometry" }}
            placeholder='Search'
            fetchDetails={true}
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(details?.geometry?.viewport);
            }}
            query={{
                key: 'AIzaSyDX-f2vqw0VRyap4A1a283FE1V2TQ6_-bQ',
                language: 'en',
            }}
            />
        </View>

        <ScrollView>
            <View className="flex-row items-center justify-between px-8 mt-8">
                <MenuContainer
                    key={"hotel"}
                    title={"Hotels"}
                    imageSrc={Hotels}
                    type={type}
                    setType = {setType}
                />
                <MenuContainer
                    key={"attractions"}
                    title={"Attractions"}
                    imageSrc={Attractions}
                    type={type}
                    setType = {setType}
                />
                <MenuContainer
                    key={"restaurants"}
                    title={"Restaurants"}
                    imageSrc={Restaurants}
                    type={type}
                    setType = {setType}
                />
            </View>


            <View>
                <View className="flex-row items-center justify-between px-4 mt-8">
                    <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
                    <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                        <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
                        <FontAwesome name='long-arrow-right' size={24} color="#ABC4C7" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                <ItemCardContainer key={102} imageSrc={"https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg"} title={"Something"} location={"Doha"} />
                <ItemCardContainer key={103} imageSrc={"https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg"} title={"Simple"} location={"Qatar"} />
            </View>


        </ScrollView>

    </SafeAreaView>
  )
}

export default Discover