import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./hooks/authContext";
import Navigator from "./navigator";
export default function App() {
  return (
    <NavigationContainer>      
        <AuthProvider>  
          <Navigator /> 
        </AuthProvider>       
    </NavigationContainer>
  );
}
