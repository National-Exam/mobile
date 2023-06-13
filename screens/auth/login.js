import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../../components/LoginForm";
export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <LoginForm navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}
