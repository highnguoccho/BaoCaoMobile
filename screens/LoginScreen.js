import CheckBox from "@react-native-community/checkbox";
import Checkbox from "expo-checkbox";
import axios from 'axios';
import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import {Image,Alert,TextInput, SafeAreaView,StyleSheet,Text,View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
const LoginScreen =() =>{
    const [isChecked, setChecked] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameMessage, setUsernameMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const navigation = useNavigation();
    const [getPasswordVisible,setPasswordVisible]=useState(false);
    const onSubmit=async () =>{
        try {
            const response = await axios.get(
              `http://192.168.1.5:3000/api/users/?username=${username}&password=${password}`
            );
            if(username==='' || password ===''){
              return
            }else{
              setUsernameMessage('');
              setPasswordMessage('');
              if (response.data.length > 0) {
                // Đăng nhập thành công
                Alert.alert('Đăng nhập thành công');
                navigation.navigate('HomeScreen');
              } else {
                // Đăng nhập thất bại
                Alert.alert('Đăng nhập thất bại','Sai tài khoản hoặc mật khẩu');
              }
            }
          } catch (error) {
            if (error.response) {
              // Xử lý lỗi từ máy chủ (ví dụ: lỗi 404, 500, ...)
              console.error('Server error:', error.response.status);
              Alert.alert('Server Error', 'An error occurred on the server.');
            } else if (error.request) {
              // Xử lý lỗi mạng (ví dụ: không thể kết nối)
              console.error('Network error:', error.request);
              Alert.alert('Network Error', 'Unable to connect to the server.');
            } else {
              // Xử lý lỗi khác (ví dụ: lỗi cú pháp JSON)
              console.error('Error:', error.message);
              Alert.alert('Error', 'An error occurred.');
            }
          }
        };
        const handleRegister = () => {
          // Chuyển hướng tới màn hình đăng kí
          navigation.navigate('Dangky');
        };
    return(
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'white'}></StatusBar>
            <View style={styles.title }>
                <Text style={{fontWeight:'bold',fontSize:20,color:'pink'}}>Đăng Nhập</Text>
            </View>
        
        <View style={styles.form}>
            <View style={styles.group}>
                <Icon name="email" style={styles.icon}/>
                <TextInput  placeholder="Tên đăng nhập" style={styles.ip} 
                onChangeText={(text) => setUsername(text)}></TextInput>
            </View>
        </View>

        <View style={styles.form}>
            <View style={styles.group}>
                <View>
                    <Icon name="locked" style={styles.icon}/>
                    <TextInput  placeholder="Mật khẩu" style={styles.ip} secureTextEntry={getPasswordVisible? false:true}  onChangeText={(text) => setPassword(text)}/>
                <TouchableOpacity style={{position:'absolute',right:30}} onPress={()=>{setPasswordVisible(!getPasswordVisible)}}>
                {getPasswordVisible?
                    <Icons name="eye-with-line" style={styles.icon1}/>
                    :
                    <Icons name="eye" style={styles.icon1}/>
                }
                </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.group1}>
            <View style={{flexDirection:'row'}}>
                <Checkbox
                    disabled={false}
                    value={isChecked}
                    onValueChange={()=> setChecked(!isChecked)}
                    tintColors={{true:'purple'}}
                />
                <Text> lưu mật khẩu</Text>
            </View>
            <View >
                <TouchableOpacity >
                    <Text style={{color:'pink'}}>Quên mật khẩu</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.form1}>
            <TouchableOpacity  style={styles.btn} onPress={()=>onSubmit()} >
                <Text style={{color:'#ffffff',fontWeight:'bold'}}>Đăng nhập</Text>

            </TouchableOpacity>
        </View>
        <View style={styles.form2}>
            <TouchableOpacity  style={styles.btn1}  onPress={()=>handleRegister ()} >
                <Text style={{color:'pink',fontWeight:'bold'}}>Đăng ký</Text>

            </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',paddingTop:50}}>
            <Text style={{color:'#a6a6a6'}}>Đăng nhập bằng phần mềm khác</Text>
        </View>
        
        <View style={{flexDirection:'row', justifyContent:'space-between',paddingHorizontal:100,paddingTop:50}}>
         
            <Image source={require('../assets/fb1.jpg')} style={{width:68,height:50}}/>
            <Image source={require('../assets/gg.png')} style={{width:50,height:50}}/>
         </View>
    </SafeAreaView>
    )
}
const styles= StyleSheet.create ({
   container:{
    flex:1,
    backgroundColor:'#ffffff',
   },
   title:{
    marginTop:110,
    alignItems:'center'
   },
   form:{
    marginTop:20,
    paddingHorizontal:50,
   },
   group:{
   },
   ip:{
    paddingBottom:10,
    borderBottomWidth:3,
    borderRadius:10,
    borderColor:'#DDDDDD',
    paddingLeft:30,
   },
   group1:{ 
    marginTop:20,
    paddingHorizontal:50,
    flexDirection:'row',
   justifyContent:'space-between'
   },
   group2:{
    paddingHorizontal:100
   },
   form1:{
    marginTop:50,
    paddingHorizontal:100
   },
   form2:{
    marginTop:10,
    marginHorizontal:90,
    paddingHorizontal:60,
    borderBottomWidth:3,
    borderRadius:50,
    borderColor:'pink',
   },
   icon:{
    fontSize:25,
    position:'absolute',
    top:-2,
    zIndex:1000,
    color:'#D3D3D3',
   },
   icon1:{
    fontSize:25,
    position:'absolute',
    zIndex:1000,
    color:'#D3D3D3',
   },
   btn:{
    backgroundColor:'pink',
    paddingVertical:10,
    alignItems:"center",
    borderRadius:30,
   },
   btn1:{
    backgroundColor:'#ffffff',
    paddingVertical:10,
    alignItems:"center",
    borderRadius:30,
   },
})
 export default LoginScreen;