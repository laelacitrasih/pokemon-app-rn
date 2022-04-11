import React, { useState, useEffect } from "react";
import { Text, View, ScrollView} from "react-native";
import styles from "../../assets/styles";
import { pokemonColors } from "../../store/action";

export default function Moves(props) {
    const { item } = props

    const pokemonColor = pokemonColors[item.type];

    return (
        <ScrollView >
            <View style={{ flexDirection: "row", flexWrap: "wrap", }}>
                {item.moves.map((move, idx) => {
                    return (
                        <View key={idx} style={{ backgroundColor: pokemonColor, borderRadius: 5, alignSelf: "baseline", margin: 5, opacity: .4 }}>
                            <Text style={{ color: "black", padding: 5, }}>{move.move.name}</Text>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}