import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
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
        marginBottom: 25,
        position: 'static',      
    },

    blackLogo: {
        width: 46,
        height: 49,
        resizeMode: 'contain',
    },

    containerMainLogo: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',  
        marginBottom: 30,      
    },

    mainLogo: {
        width: 320,
        height: 90,
        resizeMode: 'contain',
    },

    boxInput: {
        width: 320,
        height: 56,
        borderRadius: 8,   
        padding: 16,
        gap: 8, 
        borderWidth: 1,
        borderColor: '#808080',
        fontSize: 16,
        marginBottom: 25, 
        alignItems: 'center',
        flexDirection: 'row', 
    },

    input: {
        backgroundColor: '#FFFFFF',
        width: '93%', 
        height: 48,
    },

    characterCard: {
        backgroundColor: '#FFFFFF',
        width: 317, 
        height: 308,
        borderRadius: 6,
        marginBottom: 25,
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

    charactersFlatList: {
        backgroundColor: "#FFFFFF", 
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        gap: 15,
    },

    notFound: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 15,
      },

})