import { StyleSheet } from "react-native";
import { colorPrimary, colorSecundary, colorTertiary } from "../../constants/colors";
import { WINDOW_HEIGTH, WINDOW_WIDTH } from "../../constants/screen";

export default StyleSheet.create({
    container: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGTH,
        backgroundColor: 'black',
        position: "absolute",
        bottom: 0,
        top: 0,
        alignSelf: 'center',
    },
    modal: {
        backgroundColor: colorTertiary,
        alignItems: 'center',
        // justifyContent: 'center',
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGTH * 0.2,
        position: 'absolute',
        borderTopEndRadius: WINDOW_WIDTH * 0.05,
        borderTopStartRadius: WINDOW_WIDTH * 0.05,
        opacity: 1,
        paddingTop: '7.5%'
    },
    close: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    contente: {
        width: WINDOW_WIDTH * 0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginVertical: WINDOW_HEIGTH * 0.04
    },
    title: {
        color: colorSecundary,
        fontSize: 30,
        // fontWeight: 'bold'
    },
    value: {
        color: colorSecundary,
        fontSize: 45,
        fontWeight: 'bold'
    },
    medal: {
        position: 'absolute',
        bottom: WINDOW_WIDTH * 0.05
    },
});