import React, { useState } from 'react';
import { View, Text, Image,TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/banner.png')} style={styles.imageBackground}>
  <TouchableOpacity style={styles.backButton}>
 <Image style={styles.logo}  source={require("../../assets/Icon.png")}/>
    </TouchableOpacity >   
        <View style={styles.textContainer}>
        <Text style={styles.headerText}>Ice-cream Parlor</Text>
        <Text style={styles.subHeaderText}>
          Log in to access the area administration of the ice cream shop.
        </Text>
        </View>
      </ImageBackground>

      <View style={styles.loginSection}>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.inputContainer}>
            <Icon name="mail-outline" size={20} color="#6A0DAD" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock-closed-outline" size={20} color="#6A0DAD" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity>
            <Text style={styles.forgetText}>Forget password?</Text>
        </TouchableOpacity>
     

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginButtonText}>Enter</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
              <View style={styles.line}></View>
              <Text  style={styles.orText}>OR</Text>
              <View style={styles.line}></View>
        </View>
        <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate('Home')}>
        <Image style={styles.googleImage} source={require('../../assets/google.png')} />

          <Text  style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  imageBackground: { flex: 0.4,  },
  backButton:{ marginLeft:20,marginTop:60,height:32,width:32,},
  textContainer:{width:240,marginLeft:20,marginTop:40,},
  headerText: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  subHeaderText: { fontSize: 14, color: '#f1f1f1', marginTop: 5 },
  loginSection: { flex: 0.6,paddingHorizontal: 20, paddingTop: 30 },
  loginTitle: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', alignItems: 'center',  backgroundColor: 'white',borderWidth:1,borderColor:'#dedcdc', borderRadius: 25, marginBottom: 15, paddingHorizontal: 10 },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, height: 45, fontSize: 16 },
  forgetText:{fontSize:12,fontWeight:"600",color:'#6A0DAD',marginLeft:220,marginBottom:20,},
  loginButton: { backgroundColor: '#6A0DAD', borderRadius: 25, paddingVertical: 12, alignItems: 'center' },
  loginButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  line:{ height:1,backgroundColor:"#dedcdc",marginHorizontal:10,width:120,},
  orContainer:{flexDirection:"row",alignItems:"center",marginTop:20,},
  googleButton:{ marginTop:20,alignItems:'center',justifyContent:'center', backgroundColor: 'white',borderWidth:1,borderColor:'#dedcdc', borderRadius: 25, paddingVertical: 12, flexDirection:'row',alignItems: 'center' },
  googleButtonText:{ marginLeft:10,color:"black"},

});

export default Login;