import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabRoutes } from "./tabs.routes";

export function Routes () {
    return (
        <NavigationContainer>
            <TabRoutes/>
            
        </NavigationContainer>
    )
}