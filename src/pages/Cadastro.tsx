import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {

    const navigation = useNavigation();

    return(
        <View style={styles.component}>
            <Text style={styles.title}>CADASTRO</Text>

            <TextInput style={styles.campoForm} placeholder="Nome"/>
            <TextInput style={styles.campoForm} placeholder="Sobrenome"/>
            <TextInput style={styles.campoForm} placeholder="Email"/>
            <TextInput style={styles.campoForm} placeholder="Senha"/>
            <TextInput style={styles.campoForm} placeholder="Confirmar senha"/>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCad} onPress={()=> navigation.navigate('login')}>
                <Text style={styles.textCad}>LOGIN</Text>
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
        marginBottom:'10%',
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
        marginTop:'30%',
        padding:5,
    },

    textCad:{
        color:'#000',
        fontSize:14,
    },
})