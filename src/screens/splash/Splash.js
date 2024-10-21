import React from 'react'
import { View,Image,Text} from 'react-native'
import styles from "./styles";
import { TouchableOpacity } from 'react-native';
const Splash = ( { navigation } ) => {
  const login=()=>{
    navigation.replace("Login");
  }
  return (
  <View style={styles.container}>
    <Image style={styles.logo}  source={require("../../assets/logo.png")}/>
          <TouchableOpacity  onPress={() => login()}  style={{    
            backgroundColor:'#ffffff',
            flex:0.09 ,
            marginVertical:2,
            marginTop:90,
            borderRadius:50,
            marginHorizontal:40,           
             }}>
           <Text style={{
            color:'#8A19D6',
            fontSize:18,
            fontWeight:'bold',
            paddingTop:10,
            textAlign:'center',
           }} >Continue  </Text>
           </TouchableOpacity>
       
  
  </View>
  )
}

export default Splash
