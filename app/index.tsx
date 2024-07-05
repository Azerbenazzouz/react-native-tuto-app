import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl text-blue-800">Hi</Text>
      <Link href="/home" className='text-green-500 font-psemibold mt-5 text-lg'>Go home</Link>
    </View>
  )
}

export default index