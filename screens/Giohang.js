import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Alert,ScrollView,TouchableOpacity,StyleSheet,Text,View,FlatList,Image,} from "react-native";

const Giohang = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total,setTotal]=useState(0)
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get(`http://192.168.1.5:3000/api/cart`)
        .then((response) => {
          setCartItems(response.data);
          let tong = 0;
          console.log(response.data);
          response.data.forEach((element) => {
            tong += element.salePrice * element.quantity;
          });
          console.log(tong);
          setTotal(tong);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 3000); // Update cart every second (1000 milliseconds)
  
    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

const removeItem = (id) => {
  const cartItemsNew = cartItems.filter((item) => item.id !== id);
  axios.delete(`http://192.168.1.5:3000/api/cart/${id}`)
    .then((response) => {
      console.log('Sản phẩm đã được xóa khỏi giỏ hàng', response);
      Alert.alert('Sản phẩm đã được xóa khỏi giỏ hàng')
    })
    .catch((error) => {
      console.error('Lỗi khi xóa sản phẩm khỏi giỏ hàng và db.json', error);
    });
  const totalNew = cartItemsNew.reduce((total, item) => total + item.quantity * item.salePrice, 0);
  setCartItems(cartItemsNew);
  setTotal(totalNew);
};
  const Dathang = () => {
    Alert.alert("Đặt hàng thành công");
    setCartItems([]); 
    setTotal(0)  
};
const increaseQuantityByID = (id) => {
  const product = cartItems.find((item) => item.id === id);
  product.quantity++;
  setQuantity(product.quantity);
  const newTotalPrice = cartItems.reduce((total, item) => total + item.quantity * item.salePrice, 0);
  setTotal(newTotalPrice);
};
const decreaseQuantityByID = (id) => {
  const product = cartItems.find((item) => item.id === id);
  if (product.quantity >1 ) {
    product.quantity--;
  }
  setQuantity(product.quantity);
  const newTotalPrice = cartItems.reduce((total, item) => total + item.quantity * item.salePrice, 0);
  setTotal(newTotalPrice);
};
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,paddingTop:30,fontWeight: "bold",color:'pink'}}>Giỏ hàng</Text>
    
      {isLoading ? (
        <Text>Đang tải dữ liệu...</Text>
      ) : (
      <FlatList style={{paddingRight:150,paddingLeft:20}}
        data={cartItems}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={({ item }) => (
        <View >

          <View style={{flexDirection:'row',paddingTop:20}}>

            <Image source={{ uri: item.img }} style={styles.cartItemImage}/>
            <View style={{ padding: 10}}>

                <Text style={{ fontSize: 14,fontWeight: "bold"}}>{item.name}</Text>
                <Text style={{paddingTop:10, fontWeight:'bold',color:'#ff4040'}}>{item.salePrice}.000đ</Text>

                  <View style={{paddingTop:10,flexDirection:'row',borderColor:'black'}}>
                    
                  <TouchableOpacity >
                      <Text onPress={() => increaseQuantityByID(item.id)} style={{ color: "pink", fontSize: 20, paddingRight: 10 }}>+</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 16 }}>{item.quantity}</Text>

                    <TouchableOpacity >
                      <Text onPress={() => decreaseQuantityByID(item.id)} style={{color:'pink',fontSize:20,paddingLeft:10}}>-</Text>
                    </TouchableOpacity>

                  </View> 
            </View>
          </View>

            <TouchableOpacity onPress={() => removeItem(item.id)} >
              <Text style={{fontSize:20,left:150,color:'red',width:60,height:40}}>xóa</Text>
            </TouchableOpacity>

        </View>
          ) 
        }
      />
    )}
      <View style={{height:120}}>
        <View style={{flexDirection:'row'}}>
          <Text  style={{fontSize:15,fontWeight:'bold',paddingBottom:20}}>Tổng thanh toán:</Text>
          <Text  style={{fontSize:15,fontWeight:'bold',color:'#ff4040'}}>{total.toFixed(3)}đ</Text>
        </View>

        <TouchableOpacity  style={{alignItems:'center',padding:15,borderRadius:20,backgroundColor:'pink'}} onPress={() => Dathang()} >
          <Text style={{color:'#ffffff',fontWeight:'bold'}}>Giao hàng</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ffffff',
    alignItems:'center',
    paddingTop:20,
    flex: 1,

  },
  cartItemImage: {
    width: 90,
    height: 90,
  },
});

export default Giohang;