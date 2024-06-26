import { Pressable, Image } from 'react-native'

import { styles } from "./styles"

interface Character {
    id: number 
    avatar: string
}

interface Props {
    data: Character  
    onPress?: () => void
}

export function charactersCard({data, ...rest}: Props){
    return(
        <Pressable {...rest} style = {styles.charactersCard}>
            <Image source={{
                uri: `https://rickandmortyapi.com/api/character/avatar/${data.avatar}.jpeg`,
            }}
            style = {styles.characterAvatar}
            />
        </Pressable>
    )
}