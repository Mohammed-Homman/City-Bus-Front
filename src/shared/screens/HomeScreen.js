import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`h-full `}>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
        <View style={tw`p-6`}>
          <Image 
            style={{
              width: 150, 
              height: 150, 
              resizeMode: 'contain',
            }}
            source={require('../assets/emploi-City-bus-groupe.png')}
          />
          <NavOptions />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});
