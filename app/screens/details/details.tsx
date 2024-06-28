import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const CharacterDetails = ({ route }) => {
    const { character } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.detail}>Gender: {character.gender}</Text>
            <Text style={styles.detail}>Status: {character.status}</Text>
            <Text style={styles.detail}>Species: {character.species}</Text>
            <Text style={styles.detail}>Origin: {character.origin.name}</Text>
            <Text style={styles.detail}>Location: {character.location.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    detail: {
        fontSize: 18,
        marginBottom: 5
    }
});
