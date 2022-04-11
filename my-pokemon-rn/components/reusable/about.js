import React, {useState, useEffect} from "react";
import { Text, View,  } from "react-native";
import styles from "../../assets/styles";

export default function About(props) {
    const {item} = props
    const [abilities, setAbilities] = useState([])

    useEffect(() => {
        function getAbility() {
            let arr = []
            for (let i = 0; i < item.abilities.length; i++) {
                arr.push(item.abilities[i].ability.name)
            }
            return setAbilities(arr)
        }

        getAbility()
    }, [])

    return (
        <View>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>Species</Text>
                <Text style={styles.about__text}>{item.species}</Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>Height</Text>
                <Text style={styles.about__text}>{item.height} ''</Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>Weight</Text>
                <Text style={styles.about__text}>{item.weight} lbs</Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>Abilities</Text>
                <Text style={styles.about__text}>{abilities.join(', ')}</Text>
            </View>
        </View>
    )
}