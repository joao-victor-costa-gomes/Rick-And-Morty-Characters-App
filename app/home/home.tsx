import React, { useState, useEffect } from "react";
import { View, Image, TextInput, FlatList, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo_black from "../../assets/images/logo_black.png" 
import main_logo from "../../assets/images/main_logo.png" 

import { styles } from "./styles"
import { Card } from "../../components/characterCard";
import { getCharacters } from "../../services/api";

export const Home = () => {
             
    const [characters, setCharacters] = useState([]);      
    const [searchQuery, setSearchQuery] = useState("");    

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getCharacters();
                setCharacters(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCharacters();
    }, []);

    return (<View style={styles.container}>

        <View style={styles.containerBlackLogo}>
            <Image source={logo_black} style={styles.blackLogo}/>
        </View>

        <View style={styles.containerMainLogo}>
            <Image source={main_logo} style={styles.mainLogo}/>
        </View>

        <View style={styles.boxInput}>
            <Icon name="magnify" color="#808080" size={25} weight="light"/>
            <TextInput style={styles.input} placeholder="Filter by name..."
            value={searchQuery}
            onChangeText={setSearchQuery}/>
            
        </View>

        <FlatList
                contentContainerStyle={styles.charactersFlatList}

                data={characters.filter(character => character.name.toLowerCase().includes(searchQuery.toLowerCase()))}
                
                keyExtractor={(item) => item.id.toString()}

                renderItem={({ item }) => (
                    <Card
                        name={item.name}
                        race={item.species}
                        image={item.image}
                    />
                )}
        />

    </View>)
}
