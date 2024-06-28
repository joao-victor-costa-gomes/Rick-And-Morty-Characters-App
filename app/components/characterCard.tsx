import { View, Image, Text, TouchableOpacity, Pressable } from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

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

    const likeCharacter = () => {
        setLiked(!liked);
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
                    <Icon name="heart" size={30} style={[styles.notLiked, liked && styles.liked]}/>
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

export const Card = ({ name = "Unknown", race = "Unknown", image }, Props) => {

    const [liked, setLiked] = useState(false);

    const likeCharacter = () => {
        setLiked(!liked);
    };

    return(
        <Pressable style={styles.characterCard}>
            <Image
            source={{ uri: image }}
            style={styles.avatarImg}
            />
            <View style={styles.cardRow}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}> {name} </Text>
                    <Text style={styles.cardSubtitle}> {race} </Text>
                </View>

                <TouchableOpacity onPress={likeCharacter}>
                    <Icon name="heart" size={30} style={[styles.notLiked, liked && styles.liked]}/>
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}