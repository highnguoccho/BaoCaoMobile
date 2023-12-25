import CheckBox from "@react-native-community/checkbox";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import {ScrollView,Image,Alert,TextInput, SafeAreaView,StyleSheet,Text,View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
const Setting =() =>{
    return(
      
        <ScrollView > 
            <View style={{paddingTop:50,backgroundColor:'#e3e3e3'}}>
                <Text style={{paddingLeft:20,paddingBottom:10,fontWeight:'bold'}}>Tài khoản</Text>
            </View> 
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/users.png')} style={{width:25,height:25}}/>
                    <Text>  Tài khoản</Text>
                </Text>
                <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/pass1.jpg')} style={{width:20,height:25}}/>
                    <Text>  Quyền riêng tư</Text>
                </Text>
                <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/security.png')} style={{width:25,height:25}}/>
                    <Text>  Bảo mật</Text>
                </Text>
                <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/shop.png')} style={{width:25,height:25}}/>
                    <Text>  Đơn hàng của bạn</Text>
                </Text>
                <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <View style={{paddingTop:20,backgroundColor:'#e3e3e3'}}>
                <Text style={{paddingLeft:20,paddingBottom:10,fontWeight:'bold'}}>Nội dung & hiển thị</Text>
            </View>
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/bell.png')} style={{width:25,height:25}}/>
                    <Text>  Thông báo</Text>
                </Text>
            <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/clock.png')} style={{width:25,height:25}}/>
                    <Text>  Trung tâm hoạt động</Text>
                </Text>
            <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form} >
                <Text>
                    <Image source={require('../assets/language.png')} style={{width:25,height:25}}/>
                    <Text>  Ngôn ngữ</Text>
                </Text>
            <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <View style={{paddingTop:20,backgroundColor:'#e3e3e3'}}>
            <Text style={{paddingLeft:20,paddingBottom:10,fontWeight:'bold'}}>Hỗ trợ & Giới thiệu</Text>
            </View>
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/flag.png')} style={{width:25,height:25}}/>
                    <Text>  Báo cáo vấn đề</Text>
                </Text>
            <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form}>
                <Text>
                    <Image source={require('../assets/hotro.png')} style={{width:25,height:25}}/>
                    <Text>  Hỗ trợ</Text>
                </Text>
            <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.form} onPress={()=>{navigation.navigate('LoginScreen')}}>
                <Text>
                    <Image source={require('../assets/i.png')} style={{width:25,height:25}}/>
                    <Text>  Điều khoản và Chính sách</Text>
                </Text>
            <Image source={require('../assets/arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>    
    </ScrollView>
    );
}
const styles= StyleSheet.create ({
    form:{
        paddingHorizontal:5,
        marginTop:20,
        paddingBottom:20,
        paddingHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor:'#DCDCDC',
        flexDirection:'row',
        justifyContent:'space-between',
       },
})
export default Setting;