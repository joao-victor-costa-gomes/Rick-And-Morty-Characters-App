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
        width: 350,
        height: 104,
        resizeMode: 'contain',
    },

    boxInput: {
        width: 350,
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
})