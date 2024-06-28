import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/home/home";
import { Favourites } from "../screens/favourites/favourites";
import Icon from 'react-native-vector-icons/Feather';
import { View, StyleSheet } from "react-native";
import { Details } from "../screens/details/details";

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
    return (
        <View style={styles.navBar}>
            <Navigator
                screenOptions={{
                    tabBarStyle: {
                        height: 75,
   
                    },
                    headerShown: false,
                    tabBarActiveTintColor: '#20BACF',
                    tabBarInactiveTintColor: '#9D9D9D',
                    tabBarShowLabel: false,
                }}
            >
                <Screen name="Home" component={Home} options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='home' color={color} size={47} weight="light" />
                    )
                }}
                />
                <Screen name="Favourites" component={Favourites} options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='heart' color={color} size={47} weight="light" />
                    )
                }}
                />
                <Screen name="Details" component={Details} 
                options={{
                    tabBarButton: () => null,
                }}
                />
            </Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        flex: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: -5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
    },
});