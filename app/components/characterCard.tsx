import { View, Image, Text, TouchableOpacity, Pressable } from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from "./styles"

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
  
  interface Props {
    data: Character;
    onPress?: () => void;
}

export const Card = ({ name = "Unknown", race = "Unknown", image }, Props) => {

    const [liked, setLiked] = useState(false);

    const likeCharacter = () => {
        setLiked(!liked);
    };

    return(
        <Pressable style={styles.characterCard} activeOpacity={0.5}>
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