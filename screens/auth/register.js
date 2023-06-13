import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignUpForm } from "../../components/SignUpForm";
export default function SignUpScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <SignUpForm navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

