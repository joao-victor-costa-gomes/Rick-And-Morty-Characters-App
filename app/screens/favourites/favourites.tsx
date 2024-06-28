import React, { useState, useEffect } from "react";
import { View, Image, TextInput, FlatList, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from "./style";
import { Card } from "../../components/characterCard"
import { getCharacters } from "../../services/api"
import { useNavigation } from "@react-navigation/native";


export const Favourites = () => {
             
 
    return (<View style={styles.container}>

        <View style={styles.containerBlackLogo}>
            <Image source={require("../../../assets/images/logo_black.png")} style={styles.blackLogo}/>
        </View>

        <View style={styles.boxInput}>
            <Icon name="magnify" color="#808080" size={25} weight="light"/>
            <TextInput style={styles.input} placeholder="Filter by name..."
            //value={search}
            //onChangeText={setSearch}
            />
            
        </View>

    </View>)
}
