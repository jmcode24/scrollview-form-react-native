import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RegisterForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formView}>
        <View style={styles.loginText}>
          <Text style={{fontWeight: "bold", fontSize: 40, color: "blue",}}>Sign up</Text>
        </View>

        <View style={styles.labelText}>
          <Text style={{fontSize: 20, color: "grey", marginTop: 20, marginBottom: 5}}>Username</Text>
        </View>

        <View style={styles.labelText}>
          <Text style={{fontSize: 20, color: "grey",  marginBottom: 5}}>Email</Text>
        </View>

        <View style={styles.labelText}>
          <Text style={{fontSize: 20, color: "grey",  marginBottom: 5}}>Password</Text>
        </View>

        <View style={styles.labelText}>
          <Text style={{fontSize: 20, color: "grey",  marginBottom: 5}}>Password again</Text>
        </View>

        <View style={styles.buttonSty}>
          <TouchableOpacity>
            <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 35, marginTop: 60}}>
          <Text style={{alignSelf: "center", fontSize: 14}}> You already have an account? <Text style={{color: "blue"}}>Log in </Text></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  formView: {
    flex: 1,
    borderWidth: 1,
    height: "100%",
    width: "100%",
    borderRadius: 20,
    borderColor: "grey",
    padding: 20,
  },

  loginText: {
    marginHorizontal: 35,
    marginTop: 50,
  },

  labelText: {
    marginHorizontal: 35,
    marginTop: 40,
    borderBottomWidth: 2,
    borderBottomColor: "blue"
  },

  buttonSty: {
    marginHorizontal: 35,
    height: "10%", 
    width: "75%", 
    backgroundColor: "blue", 
    borderRadius: 10, 
    alignItems: "center",
    justifyContent: "center", 
    marginTop: 50,
  }
});

export default RegisterForm;