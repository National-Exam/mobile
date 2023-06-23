import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, Feather } from '@expo/vector-icons';

export default function SearchScreen({ navigation, route }) {
  const [searchQuery, setSearchQuery] = useState(route?.params?.value);

  return (
    <SafeAreaView className="bg-primary w-full h-full pt-20">
        <View className="flex-col flex h-full justify-around items-between px-4">
        
      <View className="w-full flex justify-center items-center">
        <View className="bg-white  p-1 rounded-3xl flex-row items-center py-4 px-4 w-3/4">
          <Feather name="search" size={24} className="text-primary" />
          <TextInput
            value={searchQuery}
            className="pl-2"
            onChangeText={(text) => setSearchQuery(text)}            
            placeholder="Search Your Preferred Restaurant"
          />
        </View>        
      </View>
      <View className="items-center mt-100">
        <Text className="text-4xl font-semibold mt-50">Or</Text>
        <FontAwesome name="qrcode" size={100} color="black" />
        <Text className="text-4xl font-semibold mt-50">Scan Pay & Enjoy</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}
