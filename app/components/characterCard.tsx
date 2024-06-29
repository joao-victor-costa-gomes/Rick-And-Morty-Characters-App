import { View, Image, Text, TouchableOpacity, Pressable } from "react-native";
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from "./styles"

interface Character {
    id: number, 
    name: string, 
    status: string,
    species: string, 
    type: string, 
    gender: string, 
    origin: string, 
}
  
interface Props {
    data: Character;
    onPress?: () => void;
}

export const CharacterCard = ({data, ...rest}: Props) => {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const loadFavoriteStatus = async () => {
            try {
                const favorites = await AsyncStorage.getItem('favorites');
                const favoritesArray = favorites ? JSON.parse(favorites) : [];
                if (favoritesArray.includes(data.id)) {
                    setLiked(true);
                }
            } catch (error) {
                console.log(error);
            }
        };
        loadFavoriteStatus();
    }, [data.id]);

    const likeCharacter = async () => {
        try {
            const favorites = await AsyncStorage.getItem('favorites');
            const favoritesArray = favorites ? JSON.parse(favorites) : [];
            let updatedFavorites;

            if (liked) {
                updatedFavorites = favoritesArray.filter((id: number) => id !== data.id);
            } else {
                updatedFavorites = [...favoritesArray, data.id];
            }

            await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setLiked(!liked);
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <Pressable style={styles.characterCard} {...rest}>
            <Image
                source={{ uri: `https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg` }}
                style={styles.avatarImg}
            />
            <View style={styles.cardRow}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}> {data.name} </Text>
                    <Text style={styles.cardSubtitle}> {data.species} </Text>
                </View>

                <TouchableOpacity onPress={likeCharacter}>
                    <Icon name="heart" size={30} style={[styles.notLiked, liked && styles.liked]} />
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}
