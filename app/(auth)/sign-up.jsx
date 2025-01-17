import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appWrite'

const SignUp = () => {
  const [form , setForm ] = useState({
    userName:"",
    email : "",
    password : "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit =async () =>{
    if(!form.email || !form.password || !form.userName){
      Alert.alert("Please fill all the fields")
    }
    setIsSubmitting(true)
    try {
      const result = await createUser(form.email, form.password, form.userName)
      router.replace('/home')
    } catch (error) {
      Alert.alert("Error : ",error.message)
    } finally {
      setIsSubmitting(false)
    }

  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image 
            source={images.logo} 
            resizeMode='contain'
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">Sign Up to Aora</Text>
          <FormField
            title="User Name"
            value={form.userName}
            handleChangeText={(e)=>(setForm({...form, userName : e}))}
            otherStyles="mt-7"
            KeyboardType="user-name"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e)=>(setForm({...form, email : e}))}
            otherStyles="mt-7"
            KeyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e)=>(setForm({...form, password : e}))}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handelePress={submit}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Have an account already?</Text>
            <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp