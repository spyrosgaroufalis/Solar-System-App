import React, { useCallback, useEffect, useRef, useState, Component } from 'react';
import { Animated, PanResponder, Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet, Image,Dimensions , TouchableOpacity, ImageBackground, Linking , Easing, RefreshControl,} from 'react-native';
import earth from '../assets/planet-earth.png';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import space from '../assets/03.ClusteredGalaxies-434410f.jpg'
import venus from '../assets/venus.png';
import mercury from '../assets/mercury.png';
import mars from '../assets/mars.png';
import jupiter from '../assets/jupiter.png';
import saturn from '../assets/saturn.png';
import uranus from '../assets/uranus.png';
import neptune from '../assets/neptune.png';
import comet from '../assets/comet.png';
import BottomSheet from '../bottom-sheet/BottomSheet';
import { ScrollView } from 'react-native-gesture-handler';
import Circle from '../components/Circle';

import image from '../assets/sun-blasts-a-m66-flare.jpg';
import image1 from '../assets/images.jpg';









//////


const First = () => {
 

  


  



/*LINKSSS*/
const supportedURL = 'https://en.wikipedia.org/wiki/Sun';
const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    
    <TouchableOpacity onPress={handlePress} style={styles.urlButton}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
    
     
  );
};





/* ANTIDRASEIS PLANITWNN*/


//STARRRR////



 
  



const [show, setShow ] = useState(false);




  return (
    <ImageBackground source={space} style={styles.container}>
      <SafeAreaView >

      
        <Text style={[styles.header, styles.paragraph]}>The solarious systemious</Text>
        
        
        <Button onPress={() => setShow(true)} title="Learn about the SUN" />

        
       
        <Circle
      circleSize={200} // Adjust the diameter of the circle as per your preference
      //SeparatorSize={40} // Adjust the size of the center planet as per your preference
      
    />



<BottomSheet
  show={show}
  onDismiss={() => {
    setShow(false);
  }}
  enableBackdropDismiss
>
  <ScrollView contentContainerStyle={{ padding: 16 }}>
    <Image source={sun} style={styles.Openbox} />
    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>The sun</Text>
    <View
      style={{
        backgroundColor: '#038cfc',
        borderRadius: 50,
        alignItems: 'center',
        overflow: 'hidden',
        padding: 10,
      }}
    >
      <Text style={{ color: 'white', fontSize: 15 }}>
      The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun radiates this energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.

The Sun's radius is about 695,000 kilometers (432,000 miles), or 109 times that of Earth. Its mass is about 330,000 times that of Earth, comprising about 99.86% of the total mass of the Solar System. Roughly three-quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.
      </Text>
    </View>
    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Real images of the star</Text>

    <View style={{ paddingVertical: 5 }}>
    <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }} 
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={image1} style={styles.image} />
        </TouchableOpacity>
      </ScrollView>
    </View>
    

    <View style={{ marginTop: 10 }}>
      <OpenURLButton url={supportedURL}>Don't believe me?</OpenURLButton>
    </View>
  </ScrollView>
</BottomSheet>

        

      
       
      </SafeAreaView>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  paragraph: {
    color: 'white',
    margin: 24,
    textAlign: 'center',
  },
  separatorContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  separator: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 20,
    borderColor: '#737373',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  box: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
   Openbox: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },

  star: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: '50%',
    top: '50%',
    marginLeft: -20,
    marginTop: -20,
  },
  
  starImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  
  urlButton: {
    backgroundColor: '#038cfc',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    paddingHorizontal: 5,
  },
  image: {
    height: 250,
    width: 300,
  },
 
});

export default First;
