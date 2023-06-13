import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {LoginForm} from "../../components/LoginForm";
export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView className="flex">
      <View className="flex">
        <View className="bg-primary h-full">
          <View className="bg-white mt-40 rounded-t-3xl">
            <View className="flex-row items-center mb-4 justify-center mt-6">
              <Text className="text-4xl font-bold">Supa</Text>
              <Text className="text-4xl font-bold text-primary">Menu</Text>
            </View>
            <Text className="text-2xl my-2 font-bold text-center text-gray-900">
              Welcome ...
            </Text>
            <Text className="text-base text-center text-gray-500 mb-2">
              Sign in to continue
            </Text>          
              <View className="mb-2 bg-white h-full">
                <LoginForm navigation={navigation} />
              </View>            
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
