import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import {FlatList, TextInput,StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation= useNavigation();
  const [productData, setProductData] = useState([]);
  const [isProductAvailable, setIsProductAvailable] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get("http://192.168.1.5:3000/api/products")
      .then((response) => {
        const fetchedProducts = response.data.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          description: item.description,
          img: item.img,
          salePrice:item.salePrice,
          quantity:item.quantity
        }));
        setProductData(fetchedProducts);
        setIsProductAvailable(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }, []);
  const onSearch = (query) => {
    if (query === "") {
      axios
        .get("http://192.168.1.5:3000/api/products")
        .then((response) => {
          const fetchedProducts = response.data.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            img: item.img,
            salePrice:item.salePrice,
            quantity:item.quantity
          }));
          setProductData(fetchedProducts);
          setIsProductAvailable(true);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      const filteredProducts = productData.filter((product) => product.name.includes(query));
      setProductData(filteredProducts);
    }
  };

  return (
    <View >
    <View style={{paddingTop:50,paddingHorizontal:30,backgroundColor:'pink',paddingBottom:10}} >
      <TextInput placeholder="Tìm kiếm sản phẩm" style={{height: 40,padding: 10,borderRadius:10,backgroundColor:'#ffffff'}} onChangeText={text => setQuery(text)} />
        <TouchableOpacity style={{position:'absolute',right:65}} >
          <Icon onPress={() => onSearch(query)} name="search" style={{fontSize:25,top:57,position:'absolute',zIndex:1000,color:'black'}}/>
        </TouchableOpacity>
    </View>
    <View style={{backgroundColor:'#ffffff',paddingBottom:15}}>
      <Text style={{fontSize:18,fontWeight:'bold',padding:10,color:'black'}}>Thương hiệu</Text>
      
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:2}}>
         <TouchableOpacity >
          <Image source={require('../assets/logo123.jpg')} style={{width:80,height:80,borderRadius:30}}/>
        </TouchableOpacity> 
        <Text  style={{flexDirection:'row',justifyContent:'bottom-center',padding:10, color:'pink',fontSize:18}}>Caffe cho ngày mới đầy năng lượng</Text>
      </View> 
    </View>
    <View style={{padding: 10,paddingBottom:540}}>
    <Text style={{fontSize:18,fontWeight:'bold',padding:10,color:'black'}}>Sản phẩm nổi bật</Text>
    {isLoading ? (
        <Text>Đang tải dữ liệu...</Text>
      ) : (
      <FlatList 
        data={productData}
        keyExtractor={(productData) => productData.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View >
            <TouchableOpacity style={{height:260,width:175,marginRight:30,backgroundColor:'#ffffff',marginBottom:10,borderRadius:30}} onPress={() => navigation.navigate("ProductDetail", {
                productid: item.id,
                productName: item.name,
                productPrice: item.price,
                productDecription:item.description,
                productImage:item.img,
                productsalePrice:item.salePrice,
                productquantity:item.quantity
              })}
            >
              <View key={item.id} style={styles.cartItem}>
                <Image source={{ uri: item.img }} style={{width: 150,height: 130,borderRadius:30, paddingBottom:10}}/>
              <View >
                <Text style={{fontSize: 13,fontWeight: "bold"}}>{item.name}</Text>
                <Text style={{ fontSize: 12,color: "#696969",paddingTop:5,textDecorationLine: 'line-through'}}>{item.price}.000đ</Text>
                <Text style={{ fontSize: 15,color: "red",paddingTop:10}}>{item.salePrice}.000đ</Text>
              </View> 
              </View>
           </TouchableOpacity>   
          </View>
        )}
        />
      )}  
    </View></View>
  );
};

const styles = StyleSheet.create({
  
  cartItem: {
    flexDirection:'row',
    flexDirection: "column",
    margin: 10,
    alignItems:'center'
  },
  
});

export default HomeScreen;