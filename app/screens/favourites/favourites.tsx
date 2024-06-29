import React, { useState } from "react";
import { View, Image, FlatList, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from "./style";
import { CharacterCard } from "../../components/characterCard";
import { api } from "../../services/api";

interface Character {
    id: number, 
    name: string, 
    status: string,
    species: string, 
    type: string, 
    gender: string, 
    origin: string, 
    image: string
}

export const Favourites = () => {
    const [favourites, setFavourites] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            const loadFavorites = async () => {
                try {
                    setLoading(true);
                    const favorites = await AsyncStorage.getItem('favorites');
                    const favoriteIds = favorites ? JSON.parse(favorites) : [];
                    
                    const favoriteCharacters: Character[] = [];
                    
                    for (let id of favoriteIds) {
                        const response = await api.get(`/character/${id}`);
                        favoriteCharacters.push(response.data);
                    }

                    setFavourites(favoriteCharacters);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            };

            loadFavorites();
        }, [])
    );

    const renderCharacter = ({ item }: { item: Character }) => (
        <CharacterCard
            data={item}
            liked={true}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.containerBlackLogo}>
                <Image source={require("../../../assets/images/logo_black.png")} style={styles.blackLogo} />
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="green" />
            ) : (
                <FlatList
                    contentContainerStyle={styles.charactersFlatList}
                    showsVerticalScrollIndicator={false}
                    data={favourites}
                    renderItem={renderCharacter}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};
