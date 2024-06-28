import React, { useState, useEffect } from "react";
import { View, Image, TextInput, FlatList, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo_black from "../../../assets/images/logo_black.png/" 

import { styles } from "./style";
import { Card } from "../../components/characterCard"
import { getCharacters } from "../../services/api"
import { useNavigation } from "@react-navigation/native";
import { CharacterDetails } from "../details/details";

interface Character {
    id: number, 
    name: string, 
    gender: string, 
    status: string,
    specie: string, 
    origin: string, 
    type: string, 
    location: string
}

export const Favourites = () => {
             
    const [characters, setCharacters] = useState([])
    const [page, SetPage] = useState(1)     
    const [loading, SetLoading] = useState(false) 
    const [search, setSearch] = useState("")  

    const fetchCharacters = async () => {
        SetLoading(true)
            try {
                const response = await getCharacters(page);
                setCharacters([...characters, ...response]);
                SetPage(page + 1)
            } catch (error) {
                console.error(error);
            }
        SetLoading(false)
        };
   
    useEffect(() => {
       fetchCharacters()
    }, []);

    const searchCharacter = async (name: string) => {
        //SetLoading(true)
        //const data = await getCharacters(`${page}&name=${name}`);
        //if(){

        //}else {

        //}
    }

    const navigation = useNavigation()

    //const renderCharacter = ({item} : {item: Character}) => (
        //<Card data={item} onPress={() => navigation.navigate("Details", {CharacterId: item.id})}/>
    //)

    return (<View style={styles.container}>

        <View style={styles.containerBlackLogo}>
            <Image source={logo_black} style={styles.blackLogo}/>
        </View>

        <View style={styles.boxInput}>
            <Icon name="magnify" color="#808080" size={25} weight="light"/>
            <TextInput style={styles.input} placeholder="Filter by name..."
            //value={search}
            //onChangeText={setSearch}
            />
            
        </View>

        <FlatList
                contentContainerStyle={styles.charactersFlatList}
                showsVerticalScrollIndicator={false}

                //data={characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))}
                data = {characters}

                keyExtractor={(item) => item.id.toString()}

                renderItem={({ item }) => (
                    <Card
                        name={item.name}
                        race={item.species}
                        image={item.image}
                    />
                )}
                onEndReached={() => fetchCharacters()}
                onEndReachedThreshold={0.5}
        />
        {loading && <ActivityIndicator size={50} color='green'/> }

    </View>)
}
