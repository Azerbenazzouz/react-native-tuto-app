import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ 
        height: '100%',
      }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image 
            source={images.logo} 
            className="w-[130px] h-[84px]"
            resizeMode='contain' 
          />

          <Image 
            source={images.cards}
            className="max-w-[300px] w-full h-[300px] mt-4"
            resizeMode='contain'
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{' '}
              <Text className="text-secondary-200">AORA</Text>            
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-2"
              resizeMode='contain'
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation:
            embark on a journey of endless possibilities with AORA.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index