import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { api } from '../../services/api';

interface CharacterDetails {
    id: number, 
    name: string, 
    status: string,
    species: string, 
    type: string, 
    gender: string, 
    origin: { name: string },  
    image: string,
    location: { name: string }
}

type RouterProps = {
    characterId: number, 
}

export const Details = () => {
    const [characterDetails, setCharacterDetails] = useState<CharacterDetails | null>(null);
    const route = useRoute();
    const { characterId } = route.params as RouterProps;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCharacterDetails = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/character/${characterId}`);
                setCharacterDetails(response.data);
                //console.log(JSON.stringify(response.data, null, 2));
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        getCharacterDetails();
    }, [characterId]);

    if (loading) {
        return <ActivityIndicator size="large" color="green" style={styles.loader} />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerBlackLogo}>
                <Image source={require("../../../assets/images/logo_black.png")} style={styles.blackLogo} />
            </View>

            <TouchableOpacity style={styles.goBack}>
                <Icon name="arrow-left" size={24} color="#000" />
                <Text style={styles.goBackText}>GO BACK</Text>
            </TouchableOpacity>
            
            
            {characterDetails && (
            <>
            <Image source={{ uri: characterDetails.image }} style={styles.imageCircle} />

            <Text style={styles.name}>{characterDetails.name}</Text>

            <Text style={styles.informations}>Informations</Text>

            <ScrollView style={styles.infoContainer} showsVerticalScrollIndicator={false} overScrollMode='never'>

                <Text style={styles.infoLabel}>Gender</Text>
                <Text style={styles.infoValue}>{characterDetails.gender}</Text>

                <View style={styles.horizontalLine}></View>

                <Text style={styles.infoLabel}>Status</Text>
                <Text style={styles.infoValue}>{characterDetails.status}</Text>

                <View style={styles.horizontalLine}></View>

                <Text style={styles.infoLabel}>Specie</Text>
                <Text style={styles.infoValue}>{characterDetails.species}</Text>

                <View style={styles.horizontalLine}></View>

                <Text style={styles.infoLabel}>Origin</Text>
                <Text style={styles.infoValue}>{characterDetails.origin.name}</Text>

                <View style={styles.horizontalLine}></View>

                
                <Text style={styles.infoLabel}>Type</Text>
                <Text style={styles.infoValue}>{characterDetails.type ? characterDetails.type : 'Unknown'}</Text>

                <View style={styles.horizontalLine}></View>

                <Text style={styles.infoLabel}>Location</Text>
                <Text style={styles.infoValue}>{characterDetails.location.name}</Text>

                <View style={styles.horizontalEndLine}></View>

            </ScrollView>
            </>
            )}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    containerBlackLogo: {
        width: '100%',
        height: 60,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,      
        shadowRadius: 2,        
        elevation: 8,      
        marginBottom: 15,
        position: 'static',      
    },

    blackLogo: {
        width: 46,
        height: 49,
        resizeMode: 'contain',
    },

    goBack: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 20,
    },

    goBackText: {
        marginLeft: 5,
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
    },

    imageCircle: {
        width: 160,
        height: 160,
        borderRadius: 90,
        alignSelf: 'center',
        marginBottom: 15,
        borderWidth: 5, 
        borderColor: '#F2F2F7'
    },

    name: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 20
    },

    informations: {
        backgroundColor: '#FFFFFF',
        fontSize: 20,
        color: '#8E8E93',
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 24,
    },

    infoContainer: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        width: 312,
        height: 384,
        margin: 'auto',
    },

    infoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#081F32',
        marginBottom: 2
    },

    infoValue: {
        fontSize: 14,
        marginBottom: 0,
        color: '#697986',
    },

    horizontalLine: {
        width: 312,
        height: 1,
        backgroundColor: '#EDEDED',
        marginBottom: 10,
        marginTop: 10,
    },

    horizontalEndLine: {
        width: 312,
        height: 1,
        marginBottom: 10,
        marginTop: 10,
    },

    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
