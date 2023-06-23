import react from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { useFormik } from "formik";
import * as SecureStore from "expo-secure-store";

export function PurchaseForm(props) {
    const { navigation } = props;    

    const { handleSubmit, handleChange, handleReset, values } = useFormik({
        initialValues: {
            amount: "",
            meter_number: "", 
        },
        onSubmit: async (values, { resetForm }) => {
            if (!values.amount || !values.meter_number) {
                Alert.alert("Error", "You must fill in all fields");
                return;
            }

            const response = await fetch(
                "http://192.168.8.101:5000/api/v1/tokens",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        amount: values.amount,
                        meter_number: values.meter_number,
                    }),
                }
            );

            if (!response.ok) {
                Alert.alert("Error", "Invalid credentials");

                return;
            }

            const data = await response.json();
            console.log(data, 'the data')
            Alert.alert("Success", "Token created successfully", `The token is ${data.token}`); 
            
            handleReset()
        },
    });

    return (
       <View className="flex justify-center items-center">
      <View className="flex-row items-center p-4 mt-4 w-3/4 h-14 rounded-lg border-2 border-gray-200">
        <EvilIcons name="envelope" size={24} color="gray" />
        <TextInput
          placeholder="Meter number"
          value={values.meter_number}
          onChangeText={handleChange('meter_number')}
          className="w-64 ml-2"
        />
      </View>
      <View className="flex-row items-center p-4 mt-4 w-3/4 h-14 rounded-lg border-2 border-gray-200">
        <AntDesign name="lock" size={24} color="gray" />
        <TextInput          
          placeholder="Amount"
          value={values.amount}
          onChangeText={handleChange('amount')}
          className="w-64 ml-2"
          minLength={11}
          maxLength={11}
        />
      </View>
      <View className="mt-6 w-3/4">
        <TouchableOpacity
          onPress={handleSubmit}
          className="flex justify-center items-center p-4 bg-primary rounded-lg  shadow-md"
        >
          <Text className="text-white font-bold text-base">Generate token</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-between mt-6">
        <View className="w-1/3 h-1 bg-gray-500" />
        <Text className="text-gray-500 font-bold text-base">OR</Text>
        <View className="w-1/3 h-1 bg-gray-500" />
      </View>      
      <TouchableOpacity
        onPress={() => {
          console.log('Go to validate');
          navigation.navigate('Validate');
        }}
      >
        <View className="flex-row items-center justify-between mt-4 mb-2">
          <Text className="text-gray-500 text-base">Do you want to verify a token?</Text>
          <Text className="text-primary text-base">Validate</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Go to search');
          navigation.navigate('Search');
        }}
      >
        <View className="flex-row items-center justify-between mt-4 mb-2">
          <Text className="text-gray-500 text-base">Do you want to search for tokens?</Text>
          <Text className="text-primary text-base">Search</Text>
        </View>
      </TouchableOpacity>
    </View>
    );
}
