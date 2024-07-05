import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handelePress, containerStyle, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
        onPress={handelePress}
        activeOpacity={0.7}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton