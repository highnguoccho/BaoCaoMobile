import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { Alert,FlatList, TextInput,StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation } from "@react-navigation/native";
const Muangay = ({ route }) => {
    const { productName, productPrice, productDecription, productImage,productsalePrice,productquantity} = route.params;
    const [cart, setCart] = useState([]);
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);
    const [total,setTotal]=useState(route.params.productPrice)
    const handleRegister = () => {
        navigation.navigate('HomeScreen');
    };
    const increaseQuantityByID = () => {
        route.params.productquantity++;  
        setQuantity(route.params.productquantity);     
        const newTotalPrice = route.params.productquantity*route.params.productPrice;
        setTotal(newTotalPrice);
      };
      const decreaseQuantityByID = () => {
        if ( route.params.productquantity >1 ) {
            route.params.productquantity--;
        }
        setQuantity( route.params.productquantity);
        const newTotalPrice = route.params.productquantity*route.params.productPrice;
        setTotal(newTotalPrice);
      };
      const Dathang = () => {
        Alert.alert("Đặt hàng thành công");
    };
    return (
    <View style={{backgroundColor:'#ffffff'}}>
        <View style={{paddingTop:60,backgroundColor:'#63b8ff',flexDirection:'row'}}>
            <Text style={{paddingBottom:20,paddingLeft:130,fontSize:20,fontWeight:'bold'}}>Thanh toán</Text>
            <Icon name="chevron-back-outline"onPress={handleRegister} style={{paddingTop:20,fontSize:40,top:30,position:'absolute',zIndex:1000,color:'black'}}/>
        </View>
     <View style={{flexDirection:'row',paddingTop:20,paddingHorizontal:20,paddingRight:60}}>
        <Image source={{ uri: productImage}} style={styles.cartItemImage}/>
        <View style={{ padding: 10}}>
            <Text style={{ fontSize: 14,fontWeight: "bold"}}>{route.params.productName}</Text>
            <Text style={{paddingTop:10, fontWeight:'bold',color:'#ff4040'}}>{route.params.productPrice}.000đ</Text>
        <View style={{paddingTop:10,flexDirection:'row',borderColor:'black'}}>
        
            <TouchableOpacity >
                <Text onPress={() => increaseQuantityByID()} style={{ color: "#1bcdff", fontSize: 20, paddingRight: 10 }}>+</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 16 }}>{route.params.productquantity}</Text>

            <TouchableOpacity >
                <Text onPress={() => decreaseQuantityByID()} style={{color:'#1bcdff',fontSize:20,paddingLeft:10}}>-</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
      <View style={{paddingTop:400,paddingHorizontal:70,paddingBottom:100}}>
        <View style={{flexDirection:'row'}}>
          <Text  style={{fontSize:15,fontWeight:'bold',paddingBottom:20}}>Tổng thanh toán:</Text>
          <Text  style={{fontSize:15,fontWeight:'bold',color:'#ff4040'}}>{total.toFixed(3)}.000đ</Text>
        </View>

        <TouchableOpacity  style={{alignItems:'center',padding:15,borderRadius:20,backgroundColor:'#1bcdff'}} onPress={() => Dathang()}  >
          <Text style={{color:'#ffffff',fontWeight:'bold'}}>Đặt hàng</Text>
        </TouchableOpacity>
      </View>
</View>
    );
};
const styles = StyleSheet.create({
    container: {
     
    },
    cartItemImage: {
      width: 90,
      height: 90,
    },
  });
export default Muangay;