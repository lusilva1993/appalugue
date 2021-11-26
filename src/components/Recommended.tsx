import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Recommended({cover, house, offer}){
    return(
        <ImageBackground 
        source={cover}
        style={styles.container}
        blurRadius={2}
        >
            <Text style={[styles.house, styles.shadow]}>
                {house}
            </Text>

            <Text style={[styles.description, , styles.shadow]}>
                {offer}
            </Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        height:130,
        width:230,
        marginRight:20,
        borderRadius:10,
        marginBottom:40,
        opacity:0.8,
        backgroundColor:'#000',
        marginLeft:3,
        padding:12,
        marginTop:20,
    },

    house:{
        fontFamily:'Montserrat_700Bold',
        color:'#fff',
        fontSize:15,
    },

    description:{
        fontSize:12,
        fontFamily:'Montserrat_700Bold',
        color:'#fff',
    },

    shadow:{
        textShadowRadius:3,
        textShadowOffset:{ width:1, height:2 },
        textDecorationColor:'#000',
    }
})