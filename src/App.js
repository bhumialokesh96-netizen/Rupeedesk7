// src/App.js
import { NavigationContainer } from 
"@react-navigation/native"; import { 
createStackNavigator } from 
"@react-navigation/stack"; import { 
View, Text, Button } from 
"react-native"; import UserDashboard 
from "./userDashboard"; import 
AdminPanel from "./adminPanel"; import 
UserPanel from "./userPanel"; import { 
loginUser, registerUser } from 
"./auth"; const Stack = 
createStackNavigator(); const App = () 
=> {
  return ( <NavigationContainer> 
      <Stack.Navigator 
      initialRouteName="Login">
        <Stack.Screen name="Login"> 
          {({ navigation }) => (
            <View> <Text>Login</Text> 
              <Button
                title="Login" 
                onPress={() => 
                loginUser("user@example.com", 
                "password")}
              /> <Button 
                title="Register" 
                onPress={() => 
                registerUser("user@example.com", 
                "password", "user")}
              /> </View> )} 
        </Stack.Screen> <Stack.Screen 
        name="UserDashboard" 
        component={UserDashboard} /> 
        <Stack.Screen 
        name="AdminPanel" 
        component={AdminPanel} /> 
        <Stack.Screen name="UserPanel" 
        component={UserPanel} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};
export default App;
