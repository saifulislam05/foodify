import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import style, { colors, titles,btn1,hr80 } from '../../globals/style'
import {
    AntDesign,
    Octicons,
    MaterialCommunityIcons,
    FontAwesome5,
    Feather,
} from "@expo/vector-icons";


const Login = ({navigation}) => {
    const [emailFocus,setEmailFocus]=useState(false)
    const [passwordFocus,setPasswordFocus]=useState(false)
    const [showPassword,setShowPassword]=useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Log In</Text>
      <View style={styles.inputOuter}>
        <AntDesign
          name="user"
          size={24}
          color={emailFocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailFocus(true);
            setPasswordFocus(false);
            setShowPassword(false);
          }}
        />
      </View>
      <View style={styles.inputOuter}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={24}
          color={passwordFocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onFocus={() => {
            setEmailFocus(false);
            setPasswordFocus(true);
          }}
          secureTextEntry={showPassword == false ? true : false}
        />
        <Octicons
          name={showPassword == false ? "eye-closed" : "eye"}
          size={24}
          color="black"
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <TouchableOpacity style={btn1} onPress={()=>navigation.navigate('HomeScreen')}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.forgot}>Forget Password</Text>
      <Text style={styles.or}>Or</Text>
      <Text style={styles.withGoogle}>Sign In With</Text>
      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gfIcon}>
            <AntDesign name="google" size={24} color="#EA4335" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gfIcon}>
            <FontAwesome5 name="facebook-f" size={24} color="#4267B2" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={hr80}></View>
      <Text>
        Don't have an Account?
        <Text
          style={styles.signUp}
          onPress={() => navigation.navigate("SignUp")}
        >
          {" "}
          sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 10,
  },
  inputOuter: {
    width: "80%",
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: colors.col1,
    padding: 10,
    elevation: 20,
    borderRadius: 10,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
    btnText: {
        color: colors.col1,
        fontSize: titles.btnText,
        fontWeight:'bold'
    },
    forgot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom:10,
    },
    or: {
        color: colors.text1,
        marginVertical: 10,
        fontWeight: 'bold',
        
    },
    withGoogle: {
        color: colors.text2,
        marginVertical: 10,
        fontSize:25,
    },
    gf: {
        flexDirection: 'row',
        // width:'80%'
    },
    gfIcon: {
        backgroundColor: 'white',
        width: 50,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation:12,
    },
    signUp: {
        color: colors.text1,
        fontSize:17,
    }

    
});

export default Login