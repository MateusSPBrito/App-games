import { StyleSheet } from "react-native";
import { colorPrimary, colorSecundary } from "../../constants/colors";
import { WINDOW_WIDTH } from "../../constants/screen";

export default StyleSheet.create({
    container: {
        position: 'absolute',
    },
    reset: {
        backgroundColor: colorSecundary,
        width: WINDOW_WIDTH * 0.2,
        height: WINDOW_WIDTH * 0.2,
        borderRadius: WINDOW_WIDTH * 0.1,
        justifyContent: "center",
        alignItems: 'center'
    }
});