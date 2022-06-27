import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class LoginScreen extends Component {
  signInWithGoogleAsync = async () => {
   try{
     const result = await this.signInWithGoogleAsync.loginAsync({
      behaviour:"web",
      androidClientId : 650418267849-f70q3ncnchcncb8ra5fkb1h9i53m4ae.apps.googleusercontent.com ,
      iosClientId : 848245653024-j158b4tbqq50ev9f1gv0c2bu0mtmm32c.apps.googleusercontent.com ,
      scopes:['profile','email']
     })
   }
  }
  render(){
  if(!this.state.fontsLoaded){
  return <AppLoading/>;
  }else{ 
return(
<View style={styles.container}>
  <SafeAreaView style={styles.droidSafeArea}/>
  <View style={styles.appTitle}>
  <Image
  source={require("../assets/logo.png")}
  style={styles.appIcon}
 ></Image>
 <Text style={styles.appTitleText}>'story Telling/nApp'</Text>
  </View>
  <View Style={styles.buttonContainer}>
  <TouchableOpacity
  style={styles.button}
  onPress={() => this.signInWithGoogleAsync()}
  >
   <Image
   source={require("../assets/google_icon.png")}
   style={styles.googleIcon} 
   ></Image>
   <Text style={styles.googleText}>Sign in with Google</Text>
  </TouchableOpacity>
  </View>
  <View style={styles.cloudContainer}>
  <Image
  source={require("../assets/cloud.png")}
  style={styles.cloudImage}
  ></Image>
  </View>
</View>
   )
  }
 }
}