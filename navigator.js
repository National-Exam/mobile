import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import ValidateScreen from "./screens/validate";
import GenerateScreen from "./screens/generate";
import SplashScreen from "./screens/default";
import SearchScreen from "./screens/SearchScreen";

export default function Navigator() {
  return <AppNavigator />;  
} 

function AppNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
          />
      <Stack.Screen
        name="Generate"
        component={GenerateScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Validate"
        component={ValidateScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

