import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    characterCard: {
        backgroundColor: '#FFFFFF',
        width: 317, 
        height: 308,
        borderRadius: 6,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,      
        shadowRadius: 2,        
        elevation: 5,    
    },

    avatarImg: {
        width: '100%',
        height: 232,  
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6, 
    },

    cardContent: {
        padding: 13,
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: '500',
    },

    cardSubtitle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'gray',
    },

    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 13,
    },


    liked: {
        color: 'red', 
    },

    notLiked: {
        color: 'black', 
    },
})