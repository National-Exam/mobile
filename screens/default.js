import { View, Text } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

export default function DefaultScreen({navigation}) {
    const onSwipeLeft = () => {
      // Handle swiping left
      navigation.navigate("Login");
    };

    const onSwipeRight = () => {
      // Handle swiping right
      navigation.navigate("Login");
    };
  return (
    <PanGestureHandler onGestureEvent={onSwipeRight} onHandlerStateChange={onSwipeLeft}>
    <View className="flex-1 items-center w-full h-full justify-center bg-primary">
      <Text className="text-5xl font-bold mb-6 text-slate-900">
        TOKEN 
        <Text className="text-[#fff]">Generator</Text>
      </Text>
      <Text className="text-md font-bold mb-6 text-slate-900">       
        <Text className="text-blue-400">Swipe right to continue</Text>
      </Text>
    </View>
    </PanGestureHandler>
  );
}
