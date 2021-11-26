import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function MenuLogin() {

    const navigation = useNavigation();

    return(
        <TouchableOpacity style={{marginRight: 10}} onPress={()=> navigation.navigate('login')}>
            <Feather
            name="user"
            size={24}
            color="#000"
            />
        </TouchableOpacity>
    );
}