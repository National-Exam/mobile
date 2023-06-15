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
import { FontAwesome } from "@expo/vector-icons";
import { AuthContext } from "../hooks/authContext";
import { useFormik } from "formik";
import * as SecureStore from "expo-secure-store";

export function SignUpForm(props) {
    const { navigation } = props;

    const setIsLoggedIn = react.useContext(AuthContext).setIsLoggedIn;

    const { handleSubmit, handleChange, handleReset, values } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values, { resetForm }) => {
            if (!values.email || !values.password) {
                Alert.alert("Error", "You must fill in all fields");
                return;
            }

            // const response = await fetch(
            //     "http://196.223.240.154:8099/supapp/api/auth/signin",
            //     {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify({
            //             login: values.email,
            //             password: values.password,
            //         }),
            //     }
            // );

            // if (!response.ok) {
            //     Alert.alert("Error", "Invalid credentials");

            //     return;
            // }

            // const data = await response.json();
            // Alert.alert("Success", "You have successfully signed in");

            // if (data.token.accessToken) {
            //     await SecureStore.setItemAsync("token", data.token.accessToken);
            //     setIsLoggedIn(true);
            // }
        },
    });

    return (
       <View className="flex justify-center items-center">
         <View className="flex-row items-center p-4 mt-4 w-3/4 h-14 rounded-lg border-2 border-gray-200">
        <EvilIcons name="envelope" size={24} color="gray" />
        <TextInput
          placeholder="Your Full Name"
          value={values.fullName}
          onChangeText={handleChange('fullName')}
          className="w-64 ml-2"
        />
      </View>
      <View className="flex-row items-center p-4 mt-4 w-3/4 h-14 rounded-lg border-2 border-gray-200">
        <EvilIcons name="envelope" size={24} color="gray" />
        <TextInput
          placeholder="Your Email"
          value={values.email}
          onChangeText={handleChange('email')}
          className="w-64 ml-2"
        />
      </View>
     
      <View className="flex-row items-center p-4 mt-4 w-3/4 h-14 rounded-lg border-2 border-gray-200">
        <AntDesign name="lock" size={24} color="gray" />
        <TextInput
          secureTextEntry
          placeholder="Password"
          value={values.password}
          onChangeText={handleChange('password')}
          className="w-64 ml-2"
        />
      </View>
      <View className="mt-6 w-3/4">
        <TouchableOpacity
          onPress={handleSubmit}
          className="flex justify-center items-center p-4 bg-primary rounded-lg  shadow-md"
        >
          <Text className="text-white font-bold text-base">Proceed</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-between mt-6">
        <View className="w-1/3 h-1 bg-gray-500" />
        <Text className="text-gray-500 font-bold text-base">OR</Text>
        <View className="w-1/3 h-1 bg-gray-500" />
      </View>
     <Text className="text-gray-400 mt-6">If you have a PMG account?</Text>
     <View className="mt-6 w-3/4">
        <TouchableOpacity
          onPress={handleSubmit}
          className="flex justify-center items-center p-4 bg-primary rounded-lg  shadow-md"
        >
          <Text className="text-white font-bold text-base">Sign In</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-4">
        <Text className="text-primary text-base">Forgot Password</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('Go to register');
          navigation.navigate('Register');
        }}
      >
        <View className="flex-row items-center justify-between mt-4 mb-2">
          <Text className="text-gray-500 text-base">Don't have an account?</Text>
          <Text className="text-primary text-base">Register</Text>
        </View>
      </TouchableOpacity>
    </View>
    );
}
