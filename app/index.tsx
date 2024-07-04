import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">index</Text>
      <Link href="profile">profile</Link>
    </View>
  )
}

export default index