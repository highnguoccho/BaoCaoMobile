import React from "react";
import LoginScreen from "./screens/LoginScreen";
import Dangky from "./screens/Dangky";
import HomeScreen from "./screens/HomeScreen";
import Users from "./screens/Users";
import {Image,Alert,TextInput, SafeAreaView,StyleSheet,Text,View, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator,tabBarIcon } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "./screens/Setting";
import Giohang from "./screens/Giohang";
import ProductDetail from "./screens/ProductDetail";
import Muangay from "./screens/Muangay";
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:()=>
          <Image source={require('./assets/home.png')} style={{width:20,height:20}} resizeMode="stretch"  />
      }}/>
       <Tab.Screen name="Giỏ hàng" component={Giohang} options={{
        tabBarIcon:()=>
          <Image source={require('./assets/shop.png')} style={{width:20,height:20}} resizeMode="stretch"  />
      }}/>
      <Tab.Screen name="Tôi" component={Users} options={{
        tabBarIcon:()=>
          <Image source={require('./assets/users.png')} style={{width:20,height:20}} resizeMode="stretch"  />
      }}/>
       <Tab.Screen name="Cài đặt" component={Setting} options={{
        tabBarIcon:()=>
          <Image source={require('./assets/setting.png')} style={{width:20,height:20}} resizeMode="stretch"  />
      }}/>
      
    </Tab.Navigator>
  );
}
// const Stack=createStackNavigator();
const Stack = createNativeStackNavigator();
const App = () =>{
   return(
    //<LoginScreen/>
   //<Dangky/>
   //<HomeScreen/>
   //<Users/>
   //<Setting/>
   //<Giohang/>
  //<Muangay/>
   <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={ MyTabs} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Muangay" component={Muangay} />
      <Stack.Screen name="Giohang" component ={Giohang}/>
      <Stack.Screen name="Dangky" component={Dangky} />
      
    </Stack.Navigator>
   </NavigationContainer>

   );
}
export default App;