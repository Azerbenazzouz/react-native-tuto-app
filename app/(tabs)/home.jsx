import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={[{id: 'a'}, {id: 'b'}]}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Text className="text-3xl">{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <Text className="text-3xl">Home</Text>
            </View>
          </View>
        )}
      />
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home