import React, { useState, useEffect, useMemo, useCallback } from "react";
import {Alert, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
const ProductDetail = ({ route }) => {
  const {productid, productName, productPrice, productDecription, productImage,productsalePrice,productquantity} = route.params;
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();
 
  const handleAddToCart = async () => {
    Alert.alert('Sản phẩm đã được thêm vào giỏ hàng')
    // Add product to cart
    const product = {
      id:productid,
      name: productName,
      price: productPrice,
      decription: productDecription,
      img: productImage,
      salePrice:productsalePrice,
      quantity:productquantity
    };
    setCart([...cart, product]);
    // Send product information to server
    try {
      const response = await axios.post('http://192.168.1.5:3000/api/cart', product);
      console.log('Product added to cart', response);
    } catch (error) {
      console.error('Error adding product to cart', error);
    }
    
  };
  const handleRegister = () => {
    navigation.navigate('HomeScreen');
  };
  
  return (
    <View style={styles.container}>
     
      <TouchableOpacity  style={{paddingTop:70}} onPress={handleRegister} >
          <Icon name="chevron-back-outline" style={{fontSize:40,top:30,position:'absolute',zIndex:1000,color:'black'}}/>
      </TouchableOpacity>
      <Image source={{ uri: productImage }} style={{width: "100%",height: 300, borderRadius:30}} />
      <View style={{padding: 15,fontWeight: "bold"}}>
        <Text style={{ fontSize: 18,fontWeight: "bold",marginBottom: 5}}>{route.params.productName}</Text>
        <Text style={{ fontSize: 15,color: "#696969",paddingTop:5,textDecorationLine: 'line-through'}}>{route.params.productPrice}.000đ</Text>
                <Text style={{ fontSize: 18,color: "red",paddingTop:10}}>{route.params.productsalePrice}.000đ</Text>
        <Text style={{  paddingTop:10,fontSize: 15}}>{route.params.productDecription}</Text>
      </View>

      <View style={{flex: 2,flexDirection:'row',paddingTop:50,}}>
            <TouchableOpacity  style={{height:60,width:185,backgroundColor:'#ee6a50',alignItems:'center',paddingTop:20,borderRadius:30}} onPress={() => navigation.navigate("Muangay", {
                productName,
                productPrice,
                productDecription,
                productImage,
                productsalePrice,
                productquantity
              })} >
                <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Mua ngay</Text>
            </TouchableOpacity>
            <TouchableOpacity   style={{height:60,width:190,backgroundColor:'#00cdcd',alignItems:'center',paddingTop:20, marginLeft:30, borderRadius:30}} onPress={handleAddToCart} >
                <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
 
});

export default ProductDetail;
