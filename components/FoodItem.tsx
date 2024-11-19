import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import MenuItem from './MenuItem';

interface Item {
  id: string;
  name: string;
  items: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
  }>;
}

interface FoodItemProps {
  item: Item;
}

const FoodItem: React.FC<FoodItemProps> = ({ item }) => {
  const data = [item];
  return (
    <View>
      {data?.map((item, index) => (
        <React.Fragment key={item.id || index}>
          <Pressable style={{ margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              {item?.name} ({item?.items?.length})
            </Text>
            <AntDesign name="down" size={20} color="black" />
          </Pressable>

          {item?.items?.map((item, index) => (
            // Make sure item passed to MenuItem has all necessary properties
            <MenuItem 
              key={item.id || index} 
              item={{
                ...item,
                price: item.price || 0,   // Set a default price if not available
                rating: item.rating || 0, // Set a default rating if not available
                image: item.image || "",  // Set a default image URL if not available
              }} 
            />
          ))}
        </React.Fragment>
      ))}
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
