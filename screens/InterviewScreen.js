import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

/*
- Background Image provided does not entirely match the design provided, so the background image provided was used as it is
- No fonts family was provided, so the default font was used
- No figma or Adobe XD design was provided, so image sizes and font sizes are based on my discretion
*/
export default function InterviewScreen() {
  return (
    
    <ImageBackground source={require('../assets/crello.jpeg')} style={styles.backgroundImage}>
       <View style={styles.container}> 
          <View style={styles.chevron}>
                <TouchableOpacity
                  onPress={() => {
                   //Logic for  pressing back to be implemented here
                  }}>
                  <Ionicons color='#fff' size={42} name="chevron-back" />
                </TouchableOpacity>
          </View>

            <Image source={require('../assets/profilepic.jpg')} style={styles.profilePicture} />

            <Text style={styles.username}>Lois Adjetey Annan</Text>


        <View style={styles.profileInfo}>
            <View style={styles.columnDesign}>
              <Text style={styles.value}>{'137'}</Text>
              <Text style={styles.label}>{'Projects'}</Text>
            </View>

            <View style={styles.verticalSeparator}></View>

            <View style={styles.columnDesign}>
               <Text style={styles.value}>{'124'}</Text>
              <Text style={styles.label}>{'Followers'}</Text>
            </View>


            <View style={styles.verticalSeparator}></View>

            <View style={styles.followColumnDesign}>
                 <TouchableOpacity
                    style={styles.followButton}
                    onPress={() => {
                      //Logic for  follow to be implemented here
                    }}>
                    <Text style={styles.followButtonText}>Follow</Text>    
                </TouchableOpacity>
            </View>
        </View>

        <Text style={styles.yellowText}>Discover Models or Be</Text>
             <View
                  style={styles.discoveredDesign}>
                  <Text style={styles.discovered}>Discovered</Text>       
            </View>
        <Text style={styles.platformInfo}>{'A Platform that provides many kinds of the \n best and most trusted fashion'}</Text>

         <TouchableOpacity  
                 onPress={() => {
                    //Logic for pressing continuing to be implemented here
                  }} 
                  style={styles.continueButton}>
                  <Ionicons name="arrow-forward" style={styles.continueIcon} />    
          </TouchableOpacity>

          <View style={{ flexDirection: 'row',alignSelf:'center',marginBottom:18 }}>
              <Ionicons name="ellipse-sharp" style={styles.ellipseIcon} /> 
              <Ionicons name="ellipse-sharp" style={styles.ellipseIcon} /> 
              <View style={styles.longEllipse}></View>
          </View>

      </View>
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chevron:{
    marginTop:38,
    marginLeft:12
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 8,
    alignSelf:'center',
    borderWidth:2,
    borderColor:'#fff'
  },
  username:{
    fontWeight:'bold',
    color:'#fff',
    fontSize:20,
    alignSelf: 'center',
  },
  profileInfo:{
    flexDirection: 'row',
     flex: 1 ,
     marginTop:24,
     marginLeft:20,
     marginRight:20
  },
  columnDesign:{ 
    flexDirection: 'column',
    flex: 1 
  },
  followColumnDesign:{ 
    flexDirection: 'column', 
    flex: 1,
    marginLeft:20,
    marginTop:6 
  },
  label: {
    fontSize: 16,
    color: '#fff',
    textAlign:'center'
  },
  value: {
    fontSize: 18,
    fontWeight:'bold',
    color: '#fff',
    textAlign:'center'
  },
  followButtonText: {
    fontSize: 12,
    marginTop: 10,
    color: '#fff',
    paddingBottom: 6,
    justifyContent:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  followButton: {
    alignItems: 'center',
    backgroundColor:'#ffba02',
    borderRadius:20,
    height:36,
    textAlign:'center', 
  },
  verticalSeparator:{
    height: 46,
    width: 2,
    backgroundColor: '#909090',
  },
  yellowText:{
    fontWeight:'bold',
    color:'#ffba02',
    fontSize:20,
    alignSelf: 'center',
  },
  discovered:{
    fontWeight:'bold',
    color:'#fff',
    fontSize:20,
    marginTop:4,
    alignSelf: 'center',
  },
  discoveredDesign:{
    alignSelf: 'center',
    backgroundColor:'#24b6ad',
    height:36,
    width:120,
    textAlign:'center',
  },
  platformInfo:{
    color:'#fff',
    fontSize:18,
    textAlign: 'center',
    marginTop:6
  }, 
   continueButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#ffba02',
    alignSelf: 'center',
    flexDirection: 'column',
    borderWidth: 0,
    borderRadius:35,
    marginBottom:6,
    marginTop:20
   },
   continueIcon: {
    fontSize: 32,
    color: '#fff',
    textAlign:'center', 
  },
  ellipseIcon: {
    fontSize: 18,
    color: '#bbbbbf',
    textAlign:'center', 
    margin:4
  },
  longEllipse: {
    width: 40,
    height: 18,
    justifyContent: 'center',
    backgroundColor: '#ffba02',
    alignSelf: 'center',
    flexDirection: 'column',
    borderWidth: 0,
    borderRadius:12,
   },
});
