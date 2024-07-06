import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants';
const FormField = ({title,value,handleChangeText,otherStyles,KeyboardType,placeholder,...props}) => {
    const [ showPassord,setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-base text-gray-100 font-pmedium">
            {title}
        </Text>

        <View className="border-2 border-black-500 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
            <TextInput 
                className="flex-1 text-white font-psemibold text-base"
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                secureTextEntry={title === "Password" && !showPassord}
            />

            {title === "Password" && (
                <TouchableOpacity
                    onPress={()=>setShowPassword(!showPassord)}
                >
                    <Image
                        source={setShowPassword ? icons.eye : icons.eyeHide}
                        className="w-6 h-6"
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            )}
        </View>
    </View>
  )
}

export default FormField