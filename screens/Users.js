import React from "react";
import {ScrollView,Image,Alert,TextInput, SafeAreaView,StyleSheet,Text,View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Users =() =>{
    const navigation = useNavigation();
    return(
        <View>
        <View style={{backgroundColor:'pink',padding:30,paddingHorizontal:15}}>
            <View style={{ flexDirection:'row',paddingTop:20}}>
                <Image source={require('../assets/user.png')} style={{width:70,height:70}}/>
                <View style={{paddingTop:5}}>
                    <Text style={{fontWeight:'bold'}}> TuanAnh</Text>
                    <Text style={{color:'black',paddingTop:5,fontWeight:'500'}}> Người theo dõi 0 | Đang theo dõi 0</Text>
                </View>
            </View>
        </View>
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/11.png')} style={{width:25,height:25}}/>
                    <Text>  Đã thích</Text>
                </Text>
               <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/1.png')} style={{width:30,height:25}}/>
                    <Text> Shop đang theo dõi</Text>
                </Text>
            <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/1111.png')} style={{width:25,height:25}}/>
                    <Text>  Đã xem gần đây</Text>
                </Text>
            <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/11111.png')} style={{width:25,height:25}}/>
                    <Text>  Đánh giá của tôi</Text>
                </Text>
               <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <View style={{paddingTop:30,backgroundColor:'#e3e3e3'}}/>
            <TouchableOpacity style={styles.form1}>
                <Text>
                    <Image source={require('../assets/acc.png')} style={{width:25,height:25}}/>
                    <Text>  Thiết lập tài khoản</Text>
                </Text>
            <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form1}>
                <Text>
                    <Image source={require('../assets/sup.png')} style={{width:25,height:25}}/>
                    <Text>  Trung tâm trợ giúp</Text>
                </Text>
            <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form1} onPress={()=>{navigation.navigate('LoginScreen')}}>
                <Text>
                    <Image source={require('../assets/logout.png')} style={{width:25,height:25}}/>
                    <Text>  Dăng xuất</Text>
                </Text>
            <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
        </View>
    )
}
const styles= StyleSheet.create ({
    container:{
     flex:1,
     backgroundColor:'#ffffff',
    },
    title:{
     marginTop:100,
     alignItems:'center'
    },
    form:{
     marginTop:20,
     paddingBottom:20,
     paddingHorizontal:20,
     borderBottomWidth:1,
     borderBottomColor:'#DCDCDC',
     flexDirection:'row',
     justifyContent:'space-between',
    },
    form1:{
        marginTop:20,
     paddingBottom:20,
     paddingHorizontal:20,
     borderBottomWidth:1,
     borderBottomColor:'#DCDCDC',
     flexDirection:'row',
     justifyContent:'space-between',
    }
})
export default Users;