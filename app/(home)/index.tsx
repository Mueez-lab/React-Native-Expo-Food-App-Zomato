import { View, Text, Alert, ScrollView, Pressable, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import * as LocationGeocoding from 'expo-location';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Crousel from '../../components/Crousel';
import Categories from '@/components/Categories';
import Recomended from '@/components/Recomended';
import Items from '@/components/Items';
import Hotel from '@/components/Hotel';



interface Image {
    id: string;
    image: string;
    description: string;
  }
  
  interface hotel {
    id: string;
    featured_image: string;
    images?: Image[];
    name: string;
    cuisines: string;
    time: string;
    average_cost_for_two?: number;
    aggregate_rating: number;
    adress: string;
    smalladress: string;
    offer: string;
    no_of_Delivery: number;
    latitude: number;
    longitude: number;
  }

export default function Index() {
    const [locationEnable, setLocationEnable] = useState(false);
    const [currentAddress, setCurrentAddress] = useState("fetching location...");
    const hotels : hotel[]= [
        {
          id: "0",
          featured_image:
            "https://b.zmtcdn.com/data/pictures/2/18820472/b07647252aae32993047faf13a1cccf4.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          images: [
            {
              id: "0",
              image:
                "https://b.zmtcdn.com/data/pictures/chains/8/51828/68d04135bbac1e3d5ff5a87d45974da1.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
              description: "Desi Burrito • Rs249",
            },
            {
              id: "0",
              image:
                "https://b.zmtcdn.com/data/pictures/chains/8/51828/1f8008fc1cec3cd7ea2b559c32b1e642.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
              description: "Indain Burrito • Rs149",
            },
          ],
          name: "Hauz Khas Social",
          cuisines: "North Indian • Fast Food • 160 for one",
          time: "35 - 40 min • 1Km",
          average_cost_for_two: 1600,
          aggregate_rating: 4.3,
          adress: "9-A & 12, Hauz Khas Village, New Delhi",
          smalladress: "Hauz Khas Village, New Delhi",
          offer: "₹80 OFF",
          no_of_Delivery: 1500,
          latitude: 12.9916,
          longitude: 77.5712,
        },
    
        {
          id: "1",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rgOs6C9rJuwL_sjJB5n7CeGKEA-Xg2yxIYq025B7_7avmruQHZ0DPpJa8GiSzPkEfas&usqp=CAU",
          name: "Qubitos - The Terrace Cafe",
          cuisines: "Thai, European, Mexican",
          average_cost_for_two: 1500,
          aggregate_rating: 4.5,
          adress:
            "C-7, Vishal Enclave, Opposite Metro Pillar 417, Rajouri Garden, New Delhi",
          smalladress: "Rajouri Garden, New Delhi",
          offer: "₹80 OFF",
          no_of_Delivery: 2500,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "44 min",
        },
    
        {
          id: "2",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
          name: "The Hudson Cafe",
          cuisines: "Cafe, Italian, Continental",
          average_cost_for_two: 850,
          aggregate_rating: 4.3,
          adress:
            "2524, 1st Floor, Hudson Lane, Delhi University-GTB Nagar, New Delhi",
          smalladress: "Delhi University-GTB Nagar",
          offer: "₹60 OFF",
          no_of_Delivery: 1800,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "20 min",
        },
    
        {
          id: "3",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wuHjGnvTD4Aewe_M2-_5OSwPiPv1kUvMljF-sqoPRzvoFxD06BK2ac2jV-ZmQG6lQTg&usqp=CAU",
          name: "Summer House Cafe",
          cuisines: "Italian, Continental",
          average_cost_for_two: 1850,
          aggregate_rating: 4.1,
          adress:
            "1st Floor, DDA Shopping Complex, Aurobindo Place, Hauz Khas, New Delhi",
          smalladress: "Hauz Khas, New Delhi",
          offer: "₹50 OFF",
          no_of_Delivery: 1700,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "38 min",
        },
    
        {
          id: "4",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXumfbiH2jcIY8xq9QW6B1QGoh3OJ596SnpQ&usqp=CAU",
          name: "38 Barracks",
          cuisines: "North Indian, Italian, Asian",
          average_cost_for_two: 1600,
          aggregate_rating: 4.4,
          adress: "M-38, Outer Circle, Connaught Place, New Delhi",
          smalladress: "Connaught Place, New Delhi",
          offer: "₹70 OFF",
          no_of_Delivery: 1230,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "51 min",
        },
        {
          id: "5",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAW6AHZuQtR_1d9WPZn5mjK_jG-aAJxYfLQ&usqp=CAU",
          name: "Terra Mayaa Restaurant",
          cuisines: "North Indian, Continental, Italian",
          aggregate_rating: 3.5,
          adress: "6th Floor, Anil Plaza 2, G.S. Road, Christian Basti",
          smalladress: "Anil Plaza 2, G.S. Road",
          offer: "₹55 OFF",
          no_of_Delivery: 500,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "42 min",
        },
        {
          id: "6",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvPe-0FZVXXBJkBWf--jnjCcKN6PxD1Zgdw&usqp=CAU",
          name: "Mocha Hotel",
          cuisines: "Cafe, Italian",
          aggregate_rating: 4.2,
          adress: "Christian Basti, Guwahati",
          smalladress: "Christian Basti, Guwahati",
          offer: "₹90 OFF",
          no_of_Delivery: 1100,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "34 min",
        },
        {
          id: "7",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVnb3JlCmtRJUTXo3Tj3dl_ZPjq2ScYFE6g&usqp=CAU",
          name: "4 Seasons",
          cuisines: "Chinese, North Indian",
          aggregate_rating: 4.5,
          adress:
            "Opposite Institute of Social Science, Bhuban Road, Uzan Bazaar, Guwahati",
          smalladress: "Bhuban Road, Uzan Bazaar, Guwahati",
          offer: "₹55 OFF",
          no_of_Delivery: 1500,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "30 min",
        },
        {
          id: "8",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsboAN558yvuCNpy0Lm40ZMT7iYZRkfbL6xA&usqp=CAU",
          name: "Shanghai Salsa",
          cuisines: "Continental, Fast Food, Chinese",
          aggregate_rating: 4.1,
          adress:
            "37, 1st Floor, Hatigarh Chariali, Mother Teresa Road, Zoo Tiniali Area, Zoo Tiniali, Guwahati",
          smalladress: "Mother Teresa Road,Guwahati",
          offer: "₹75 OFF",
          no_of_Delivery: 1500,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "45 min",
        },
        {
          id: "9",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30R3IntPKgz0A7WzeylvnDyM8EwmAfE2qXA&usqp=CAU",
          name: "Underdoggs Sports Bar & Grill",
          cuisines: "North Indian, Continental",
          aggregate_rating: 3.9,
          adress:
            "1st Floor, Central Mall, G.S. Road, Sree Nagar, Christian Basti, Guwahati",
          smalladress: "Sree Nagar, Christian Basti, Guwahati",
          offer: "₹70 OFF",
          no_of_Delivery: 2500,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "33 min",
        },
        {
          id: "10",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdGrJhslCsWFMNhndCotN4HNucd_pm9nQSA&usqp=CAU",
          name: "Fat Belly",
          cuisines: "Asian, Chinese, Tibetan",
          aggregate_rating: 4.5,
          adress:
            "Opposite Rabindra Bhawan, GNB Road, Ambari, Dighalipukhuri East, Uzan Bazaar, Guwahati",
          smalladress: "Dighalipukhuri East, Guwahati",
          offer: "₹60 OFF",
          no_of_Delivery: 900,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "53 min",
        },
        {
          id: "11",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEO2PLGXFMmFjaR1Kj19mndyPl-Wh4Kbq0Hw&usqp=CAU",
          name: "Makhan Fish and Chicken Corner",
          cuisines: "Asian, Chinese",
          aggregate_rating: 4.5,
          adress:
            "21-A, Near Madaan Hospital, Majitha Road, Basant Nagar, Amritsar",
          smalladress: "Basant Nagar, Amritsar",
          offer: "₹55 OFF",
          no_of_Delivery: 1200,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "43 min",
        },
        {
          id: "12",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUsgy4YrizXUafeKLzAWasb93wvT_TSIvgw&usqp=CAU",
          name: "Bharawan Da Dhaba",
          cuisines: "North Indian, Fast Food",
          aggregate_rating: 3.6,
          adress: "Near Amritsar Municipal Corporation, Town Hall, Amritsar",
          smalladress: "Town Hall, Amritsar",
          offer: "₹70 OFF",
          no_of_Delivery: 1600,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "28 min",
        },
        {
          id: "13",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXsKQIgGajlkt7qydP7TS6xpVD_gKY6ufnw&usqp=CAU",
          name: "The Kulcha Land",
          cuisines: "North Indian,Asian",
          aggregate_rating: 4.3,
          adress:
            "Opposite M.K Hotel, District Shopping Centre, Ranjit Avenue, Amritsar",
          smalladress: "Ranjit Avenue, Amritsar",
          offer: "₹80 OFF",
          no_of_Delivery: 2600,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "32 min",
        },
        {
          id: "14",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0iR3PZXGiNSyJf8XCMHuF13y9KL2owcNYQ&usqp=CAU",
          name: "Brothers Dhaba",
          cuisines: "North Indian",
          aggregate_rating: 4.6,
          adress:
            "Golden Temple Out Road, Opposite Amritsar Municipal Corporation, Town Hall, Amritsar",
          smalladress: "Amritsar",
          offer: "₹65 OFF",
          no_of_Delivery: 1300,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "42 min",
        },
        {
          id: "15",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbn8yLak8QNu-M5P4ttVPHFkvKwz4G48x7w&usqp=CAU",
          name: "Charming Chicken",
          cuisines: "North Indian",
          aggregate_rating: 4.6,
          adress:
            "Golden Temple Out Road, Opposite Amritsar Municipal Corporation, Town Hall, Amritsar",
          smalladress: "Near Basant Nagar, Amritsar",
          offer: "₹45 OFF",
          no_of_Delivery: 700,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "28 min",
        },
        {
          id: "16",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQSJX9mRckG3R7NfvYCRe-08s-z22tX-6nQ&usqp=CAU",
          name: "Beera Chicken Corner",
          cuisines: "North Indian",
          aggregate_rating: 4.4,
          adress:
            "Opposite Bandari Hospital, Sehaj Avenue, Majitha Road, Near White Avenue, Amritsar",
          smalladress: "Near White Avenue, Amritsar",
          offer: "₹80 OFF",
          no_of_Delivery: 1400,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "34 min",
        },
        {
          id: "17",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOJlhGwhda4tsD8Rgk1A97akTRV8QJJC4DA&usqp=CAU",
          name: "Brothers' Amritsari Dhaba",
          cuisines: "North Indian",
          aggregate_rating: 4.2,
          adress: "Phawara Chowk, Town Hall, Amritsar",
          smalladress: "Town Hall, Amritsar",
          offer: "₹40 OFF",
          no_of_Delivery: 1600,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "40 min",
        },
        {
          id: "18",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGqVUxo6HO-CtXn-AHgAin1tvN4l8_A0e1Q&usqp=CAU",
          name: "La Roma Pizzeria",
          cuisines: "Fast Food, Italian",
          aggregate_rating: 4.6,
          adress: " Ranjit Avenue, Amritsar",
          smalladress: " Ranjit Avenue, Amritsar",
          offer: "₹40 OFF",
          no_of_Delivery: 2200,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "46 min",
        },
        {
          id: "19",
          featured_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpI5t_Hgch4-I9edPRV4YNeZKgMX1iHtQng&usqp=CAU",
          name: "Crystal Restaurant",
          cuisines: "North Indian, Mughlai",
          aggregate_rating: 3.5,
          adress: " Crystal Chowk, Queens Road, INA Colony, Amritsar",
          smalladress: "INA Colony, Amritsar",
          offer: "₹80 OFF",
          no_of_Delivery: 2500,
          latitude: 12.9716,
          longitude: 77.5946,
          time: "22 min",
        },
      ];

    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);

    const CheckIfLocationEnabled = async () => {
        let enable = await Location.hasServicesEnabledAsync();
        if (!enable) {
            Alert.alert(
                "Location is disabled",
                "Please enable your location to continue",
                [{ text: "OK" }],
                { cancelable: false }
            );
        } else {
            setLocationEnable(true);
        }
    };

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                "Permission not granted",
                "Allow the app to use location services",
                [{ text: "OK" }],
                { cancelable: false }
            );
            return;
        }
        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
        });
        const { latitude, longitude } = location.coords;

        let response = await LocationGeocoding.reverseGeocodeAsync({
            latitude,
            longitude
        });

        if (response.length > 0) {
            const { country, subregion, city } = response[0];
            let address = `${country}, ${city},  ${subregion}`;
            setCurrentAddress(address);
        }
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#1e1e2e" }}>
            <View
  style={{
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor:"#041124",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 10,
  }}
>
  <EvilIcons name="location" size={28} color="pink" />
  <View style={{ flex: 1 }}>
    <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>Deliver To</Text>
    <Text style={{ color: "cyan", fontSize: 14, marginTop: 2 }}>{currentAddress}</Text>
  </View>
  <Pressable
    style={{
      backgroundColor: "#5C9DFF",
      width: 42,
      height: 42,
      borderRadius: 21,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#5C9DFF",
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 4,
    }}
  >
    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#FFF" }}>P</Text>
  </Pressable>
</View>

<View
  style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#DDD",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 12,
    marginHorizontal: 10,
    backgroundColor: "#F9F9F9",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  }}
>
  <TextInput
    placeholder="Search for Food, Hotel"
    placeholderTextColor="#BBB"
    style={{ flex: 1, fontSize: 15, color: "#333" }}
  />
  <Fontisto name="search" size={22} color="#FF4D4D" />
</View  >

            <Crousel/>
            {/* <Categories/>
            <Recomended/> */}
            {/* <Items/> */}
            <View>
              <Text style={{color:"#00d4ff", textAlign:"center", fontSize:17, paddingHorizontal:10, lineHeight:30,  shadowColor: 'aqua',shadowOffset: { width: 1, height: 1 },shadowOpacity: 0.3,shadowRadius: 4,elevation: 6,}}>
                Feel the taste that you will never forget blended with tenderness
              </Text>
            </View>
            <View style={{justifyContent:"center", alignItems:"center"}}>
                 <Text style={{fontSize:17, letterSpacing:4, color:'#FFD700', marginTop:15, fontWeight:"600"}}>ALL RESTURANTS</Text>
            </View>
            <View style={{marginHorizontal:8}}>
                {hotels?.map((item,index)=>(
                    <Hotel key={index} item={item}/>
                ))}
            </View>
        </ScrollView>
    );
}
