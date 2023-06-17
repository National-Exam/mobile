import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import LoginScreen from "./screens/auth/login";
import RegisterScreen from "./screens/auth/register";
import SplashScreen from "./screens/auth/default";
import { AuthContext } from "./hooks/authContext"; 
import { useContext } from "react";
import SearchScreen from "./screens/app/SearchScreen";

export default function Navigator() {
  if (useContext(AuthContext).isLoggedIn) return <AppNavigator />;
  else return <AuthNavigator />;
} 

function AuthNavigator() {
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
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
