import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Login() {

    const navigation = useNavigation();

    return(
        <View style={styles.component}>
            <Text style={styles.title}>LOGIN</Text>

            <TextInput style={styles.campoForm} placeholder="Email"/>
            <TextInput style={styles.campoForm} placeholder="Senha"/>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCad} onPress={()=> navigation.navigate('cadastro')}>
                <Text style={styles.textCad}>CADASTRO</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    component:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
        padding:20,
        backgroundColor:'#fff'
    },

    title:{
        color:'#000',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:'15%'
    },

    campoForm:{
        borderColor:'#483D8B',
        width:'90%',
        borderBottomWidth:2,
        color:'#FCFBFE',
        fontSize:16,
        marginBottom:'15%',
    },

    button:{
        borderRadius:15,
        backgroundColor:'#483D8B',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%',
        paddingHorizontal:40,
        paddingVertical: 10,
    },

    textButton:{
        color:'#FCFBFE',
        fontSize:16,
    },

    buttonCad:{
        marginTop:'60%',
        padding:5,
    },

    textCad:{
        color:'#000',
        fontSize:14,
    },
})