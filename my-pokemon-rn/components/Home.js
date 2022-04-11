import React, { useEffect } from "react"
import { Text, View, Button, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import styles from "../assets/styles"
import { fetchPokemons } from "../store/action"
import PokemonCard from "./reusable/card"

export default function Home({ navigation }) {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)
    const loading = useSelector(state => state.loading)
    const next = useSelector(state => state.next)

    useEffect(async () => {
        await dispatch(fetchPokemons(next))
        return
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text__title}>Pokedex</Text>
            <FlatList
                data={pokemons}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(pokemon) => String(pokemon.id)}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                contentContainerStyle={styles.flatListContentContainer}
            />

            <View style={{ padding: 5, marginTop: 10 }}>
                <Button title="Show More" color={"gray"} onPress={() => dispatch(fetchPokemons(next))} />
            </View>
        </View>
    )
}