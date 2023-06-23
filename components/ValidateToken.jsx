import react from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useFormik } from "formik";

export function ValidateTokenForm(props) {
    const { navigation } = props;    

    const { handleSubmit, handleChange, handleReset, values } = useFormik({
        initialValues: {
           token: "",
        },
        onSubmit: async (values, { resetForm }) => {
            if (!values.token) {
                Alert.alert("Error", "You must fill in all fields");
                return;
            }

            const response = await fetch(
                "http://192.168.8.101:5000/api/v1/tokens/validate",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token: values.token,                        
                    }),
                }
            );

            if (!response.ok) {
                Alert.alert("Error", "Invalid credentials");

                return;
            }

            const data = await response.json();
            Alert.alert("Success", "Token validated successfully", `The token will last ${data?.numberOfDays}`);           
            handleReset()
        },
    });

    return (
       <View className="flex justify-center items-center">       
      <View className="flex-row items-center p-4 mt-4 w-3/4 h-14 rounded-lg border-2 border-gray-200">
        <EvilIcons name="envelope" size={24} color="gray" />
        <TextInput
          placeholder="Your Token"
          value={values.token}          
          onChangeText={handleChange('token')}
          className="w-64 ml-2"
          minLength={8}
          maxLength={8}
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
     <Text className="text-gray-400 mt-6">If you want to generate a new token?</Text>
     <View className="mt-6 w-3/4">
        <TouchableOpacity
           onPress={() => {
          console.log('Go to register');
          navigation.navigate('Generate');
        }}
          className="flex justify-center items-center p-4 bg-primary rounded-lg  shadow-md"
        >
          <Text className="text-white font-bold text-base">Generate token</Text>
        </TouchableOpacity>
      </View>     
     <View className="mt-6 w-3/4">
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
      
    </View>
    );
}
