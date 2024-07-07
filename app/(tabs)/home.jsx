import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    // fetch data
    setRefreshing(false);
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Text className="text-3xl text-white">{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">Welcome back</Text>
                <Text className="font-psemibold text-2xl text-white">Azer</Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-fill flex-1 pt-5 pb-8">
              <Text className="font-pregular text-lg text-gray-100 mb-3">Latest Vedios</Text>

              <Trending
                posts={[] ?? []}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No vedios found"
            subtitle="Be the first to upload a vedio!"
          />
        )}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  )
}

export default Home