import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "../../assets/styles";
import { useNavigation } from "@react-navigation/native";
import { pokemonColors } from "../../store/action"

export default function PokemonCard(props) {
    const { pokemon } = props;
    const navigation = useNavigation();

    const pokemonColor = pokemonColors[pokemon.type];
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Detail", pokemon)}
        >
            <View style={styles.card}>
                <View style={styles.card__spacing}>
                    <View style={bgStyles}>
                        <Image
                            style={styles.card__imagePokemon}
                            source={{ uri: pokemon.imgUrl }}
                        />
                        <Text style={styles.card__name}>{pokemon.name}</Text>
                        {
                            pokemon.types.map((type, idx) => {
                                return (
                                    <View key={idx} style={styles.card__typeContainer}>
                                        <Text style={styles.card__typeText}>{type.type.name}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
}