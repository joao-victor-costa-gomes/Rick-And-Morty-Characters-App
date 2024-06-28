import React, { useState, useEffect } from "react";
import { View, Image, TextInput, FlatList, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo_black from "../../../assets/images/logo_black.png" 
import main_logo from "../../../assets/images/main_logo.png" 

import { styles } from "./styles"
import { CharacterCard } from "../../components/characterCard"
import { api } from "../../services/api"
import { useNavigation } from "@react-navigation/native";

interface Character {
    id: number, 
    name: string, 
    status: string,
    species: string, 
    type: string, 
    gender: string, 
    origin: string, 
}

export const Home = () => {

    const [charactersList, setCharactersList] = useState<Character[]>([])
    const [page, SetPage] = useState(1) 
    const [loading, SetLoading] = useState(false)
    const [search, setSearch] = useState("") 
    const [notFound, setNotFound] = useState(false) 
    const [resultCharacters, setResultCharacters] = useState<Character[]>([])

    const loadCharacters = async () =>  {
        SetLoading(true)
        const response = await api.get("/character", {
            params: {
                page, 
            }
        })
        setCharactersList([...charactersList ,...response.data.results])
        SetPage(page + 1)
        SetLoading(false)
    }

    useEffect(() => {
        loadCharacters()
     }, []);

    const handleSearch =  (name: string) => {
        setSearch(name)
        if (search.length > 0){
            searchCharacters(name)
        } else {
            setResultCharacters([])
        }
    }

    const searchCharacters = async (query: string) => {
        SetLoading(true)
        const response = await api.get(`/character/?name=${query}`, {
        })

        if (response.data.results.length === 0){
            setNotFound(true)
        } else {
            setResultCharacters(response.data.results)
        }
        SetLoading(false)
    }

    const charactersData = search.length > 0 ? resultCharacters : charactersList

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
            value={search}
            onChangeText={handleSearch}
            />

        {notFound && ( <Text style={styles.notFound}> Nenhum personagem encontrado de nome "{search}" </Text> )}
            
        </View>

        <FlatList
                contentContainerStyle={styles.charactersFlatList}
                showsVerticalScrollIndicator={false}

                data = {charactersData}
                renderItem = {(item) => (
                    <CharacterCard
                    data={item.item}
                    />
                )}
                onEndReached={() => loadCharacters()}
                onEndReachedThreshold={0.5}

        />
        {loading && <ActivityIndicator size={50} color='green'/> }

    </View>)
}
