import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuContainer = ({ title,imageSrc,type,setType }) => {
    const handlePress = () => {
        setType(title.toLowerCase());
    }
  return (
   <TouchableOpacity onPress={handlePress} className="items-center justify-center space-y-2">
        <View className={`p-2 w-24 h-24 shadow-sm rounded-full items-center 
        justify-center ${ type === title.toLowerCase() ? "bg-gray-300": ""}`}>
            <Image
                source={imageSrc}
                className="w-full h-full object-contain"
            />
        </View>
        <Text className="text-[#00BCC9] text-base font-semibold">{title}</Text>
   </TouchableOpacity> 
  )
}

export default MenuContainer