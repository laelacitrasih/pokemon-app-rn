import { StyleSheet, Platform, Dimensions } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
        // padding: 10,
    },
    content: {
        flex: 1,
        backgroundColor: "#f4f4f4",
    },

    container__moves: {
        top: 160,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flex: 1,
        paddingTop: 70,
    },
    button: {
        borderRadius: 15,
        left: 5,
        right: 5,
        color: "gray",
    },
    navbar__container: {
        padding: 10,
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text__navbar: {
        fontSize: 20
    },
    text__title: {
        fontSize: 50,
        margin: 10,
        marginBottom: 15,
        fontWeight: 'bold',
        color: "gray"
    },
    text__titleDetail: {
        fontSize: 50,
        margin: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        color: "#fff"
    },
    text__PokemonCard: {
        fontSize: 30
    },
    image__PokemonCard: {
        width: 10,
        height: 10
    },
    card__imagePokemon: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,

    },
    detail__imagePokemon: {
        height: 200,
        width: 200,
        position: 'absolute',
        top: 20,
    },
    detail__containerInfo: {
        flex: 1,
        paddingHorizontal: 10,
    },
    detail__listTab: {
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: 20
    },
    detail__btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: "row",
        borderBottomColor: 'gray',
        borderBottomWidth: .5,
        padding: 10,
        justifyContent: "center"
    },
    detail__textTab: {
        fontSize: 25,
        color: "gray",
        fontWeight: "bold"
    },
    detail__btnTabActive: {
        backgroundColor: "blue"
    },
    card: {
        flex: 1,
        height: 140,
    },
    card__typeText: {
        color: "black",
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        opacity: 1
    },
    card__typeContainer:{
        backgroundColor: "#fff", 
        opacity:.2, 
        borderRadius: 10, 
        alignSelf: "baseline", 
        margin: 1
    },
    card__spacing: {
        flex: 1,
        padding: 5,
    },
    card__name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        paddingTop: 10,
    },
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 5 : 0,
    },

    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    about__title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        marginLeft: 30,
        color: "grey",
        opacity: .7,
        width: 120,
    },
    about__text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        color: "grey",
    },
    stats__title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        marginLeft: 30,
        color: "grey",
        opacity: .7,
        width: 120,
    },
    stats__text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        color: "grey",
        width: 80
    },

})