import CheckBox from "@react-native-community/checkbox";
import Checkbox from "expo-checkbox";
import axios from 'axios';
import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import {Image,Alert,TextInput, SafeAreaView,StyleSheet,Text,View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
const Dangky =() =>{
    const [isChecked, setChecked] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const navigation = useNavigation();
    const [getPasswordVisible,setPasswordVisible]=useState(false);
    const onSubmit=async() =>{
        try {
            if (!username || !password ||!rePassword) {
              Alert.alert('Lỗi', 'Vui lòng nhập tài khoản và mật khẩu.');
              return;
            }
            if(password!=rePassword){
                Alert.alert('Lỗi', 'mật khẩu không khớp');
                return
            }
            // Gửi yêu cầu đăng ký lên server
            const response = await axios.post('http://192.168.1.5:3000/api/users', {
              username,
              password,
              
            });
      
            // Xử lý kết quả từ server
            if (response.data) {
                    Alert.alert('Thông báo', 'Tài khoản đã được đăng kí thành công');
                    navigation.navigate('LoginScreen'); // Quay lại màn hình đăng nhập sau khi đăng ký thành công
            } else {
              Alert.alert('Thông báo', 'Đăng kí thất bại. Vui lòng thử lại.');
            }
          } catch (error) {
            console.error('Lỗi đăng kí:', error.message);
            Alert.alert('Lỗi', 'Đã xảy ra lỗi khi đăng kí.');
          }
        };
    return(
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'white'}></StatusBar>
            <View style={styles.title }>
                <Text style={{fontWeight:'bold',fontSize:20,color:'pink'}}>Đăng ký</Text>
            </View>
        <View style={styles.form}>
            <View style={styles.group}>
                <Icon name="email" style={styles.icon}/>
                <TextInput  placeholder="Tên đăng nhập" style={styles.ip}  value={username} onChangeText={(text) => setUsername(text)}></TextInput>
            </View>
        </View>
        <View style={styles.form}>
            <View style={styles.group}>
                <View>
                    <Icon name="locked" style={styles.icon}/>
                    <TextInput  placeholder="Nhập mật khẩu" style={styles.ip} secureTextEntry={getPasswordVisible? false:true} value={password} onChangeText={(text) => setPassword(text)}/>
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
        <View style={styles.form}>
            <View style={styles.group}>
                <View>
                    <Icon name="locked" style={styles.icon}/>
                    <TextInput  placeholder="Nhập mật khẩu" style={styles.ip} secureTextEntry={getPasswordVisible? false:true} value={rePassword} onChangeText={(text) => setRePassword(text)}/>
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
                />
                <Text> lưu mật khẩu</Text>
            </View>
        </View>
        <View style={styles.form1}>
            <TouchableOpacity  style={styles.btn} onPress={()=>onSubmit( )} >
                <Text style={{color:'#ffffff',fontWeight:'bold'}}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.form2}>
            <TouchableOpacity  style={styles.btn1}  onPress={()=>navigation.navigate('LoginScreen')} >
                <Text style={{color:'red',fontWeight:'bold'}}>Hủy</Text>

            </TouchableOpacity>
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
    marginTop:100,
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
   },
   group2:{
    paddingHorizontal:100
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
    borderColor:'red',
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
 export default Dangky;