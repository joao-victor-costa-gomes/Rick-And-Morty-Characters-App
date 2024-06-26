import { View, Image, TextInput, FlatList } from "react-native";
import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react-native";

import logo_black from "../../assets/images/logo_black.png" 
import main_logo from "../../assets/images/main_logo.png" 

import { styles } from "./styles"

interface Character {
    id: number 
    avatar: string 
}

export const Home = () => {
    const [findCharacters, setFindCharacters] = useState<Character[]>([])
    return (<View style={styles.container}>

        <View style={styles.containerBlackLogo}>
            <Image source={logo_black} style={styles.blackLogo}/>
        </View>

        <View style={styles.containerMainLogo}>
            <Image source={main_logo} style={styles.mainLogo}/>
        </View>

        <View style={styles.boxInput}>
            <MagnifyingGlass color="#808080" size={25} weight="light"/>
            <TextInput style={styles.input} placeholder="Filter by name..."/>
        </View>

        <View>
            <FlatList/>
        </View>

    </View>)
}
