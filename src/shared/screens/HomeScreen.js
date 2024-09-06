import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <View style={tw`p-6`}>
        <Image 
          style={{
            width: 150, 
            height: 150, 
            resizeMode: 'contain',
          }}
          source={require('../../../assets/emploi-City-bus-groupe.png')}
        />
        {/* FlatList inside NavOptions will handle scrolling */}
        <NavOptions />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});
