import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import MenuLogin from "./components/MenuLogin";

const Stack = createStackNavigator();

function Routes(){

   //const navigation = useNavigation();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="home" 
                component={Home}
                options={{
                    title: 'ALUGUE',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{marginRight: 10}}>
                                <Feather
                                name="shopping-bag"
                                size={24}
                                color="#000"
                                />
                            </TouchableOpacity>

                            <MenuLogin/>
                        </View>
                    )
                }}
                />
                <Stack.Screen 
                name="detail" 
                component={Detail}
                options={{
                    title: 'Detalhe',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{marginRight: 10}}>
                                <Feather
                                name="shopping-bag"
                                size={24}
                                color="#000"
                                />
                            </TouchableOpacity>

                            <MenuLogin/>
                        </View>

                    )
                }}
                />

                <Stack.Screen
                name="login" 
                component={Login}
                options={{
                    title: 'Login',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    }
                }}
                />

                <Stack.Screen
                name="cadastro" 
                component={Cadastro}
                options={{
                    title: 'Cadastro',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    }
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;