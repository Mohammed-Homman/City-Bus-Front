import React from 'react';
import { FlatList, Image, TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';

import FindBus from '../../assets/image1.jpg';
import BuySubscription from '../../assets/image2.webp';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: "123",
    title: "Find your Bus",
    image: FindBus,
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Buy a Subscription",
    image: BuySubscription,
    screen: "BuyScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`mx-4 mb-6 bg-gray-100 rounded-xl overflow-hidden shadow-lg w-11/12`} 
        >
          <Image
            style={tw`w-full h-55 rounded-t-xl`} 
            source={item.image}
          />
          <View
            style={tw`flex-row items-center justify-between p-4 bg-white rounded-b-xl`} 
          >
            <Text style={tw`text-lg font-bold text-gray-900`}>
              {item.title}
            </Text>
            <Icon
              name="arrowright"
              type="antdesign"
              color="white"
              style={tw`p-3 bg-black rounded-full`} 
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
