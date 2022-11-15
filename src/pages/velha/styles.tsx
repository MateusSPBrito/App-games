import { StyleSheet } from "react-native";
import { colorPrimary, colorSecundary, colorTertiary } from "../../constants/colors";
import { WINDOW_WIDTH } from "../../constants/screen";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPrimary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: WINDOW_WIDTH * 0.9,
        height: WINDOW_WIDTH * 0.9,
        backgroundColor: colorSecundary,
        flexWrap: "wrap",
        justifyContent: 'space-between',
        alignContent: 'space-between',
    },
    buttom: {
        width: '30%',
        height: '30%',
        backgroundColor: colorPrimary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    reset: {
        backgroundColor: colorSecundary,
        width: WINDOW_WIDTH * 0.2,
        height: WINDOW_WIDTH * 0.2,
        borderRadius: WINDOW_WIDTH * 0.1,
        position: 'absolute',
        top: 90,
        justifyContent: "center",
        alignItems: 'center'
    },
    placar: {
        width: WINDOW_WIDTH,
        height: 75,
        position: 'absolute',
        bottom: 0,
        backgroundColor: colorTertiary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        right: WINDOW_WIDTH * 0.2
    },
});