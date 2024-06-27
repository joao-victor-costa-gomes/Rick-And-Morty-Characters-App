import { View, Image, Text, TouchableOpacity, Pressable } from "react-native";
import { useState } from "react";
import { MagnifyingGlass, HeartStraight } from "phosphor-react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from "./styles"

export const Card = ({ name = "Unknown", race = "Unknown", image }) => {

    const [liked, setLiked] = useState(false);

    const likeCharacter = () => {
        setLiked(!liked);
    };

    return(
        <TouchableOpacity style={styles.characterCard} activeOpacity={0.5}>
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
        </TouchableOpacity>
    )
}