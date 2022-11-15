import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { WINDOW_HEIGTH, WINDOW_WIDTH } from '../../constants/screen';
import styles from './styles';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colorSecundary } from '../../constants/colors';

const PlacarVelha = forwardRef((props, ref) => {

    const [position] = useState(new Animated.Value(-WINDOW_HEIGTH * 0.3))
    const [opacity] = useState(new Animated.Value(0))
    const [visible, setVisible] = useState(false)
    const [o, setO] = useState(0)
    const [x, setX] = useState(0)
    const [medal, setMedal] = useState(0)

    useImperativeHandle(ref, () => ({
        action() { action(true) },
        winner(win: boolean) { winner(win) }
    }));

    useEffect(() => {
        medalCheck()
    }, [o, x])

    const medalCheck = () => {
        if (o > x) setMedal(WINDOW_WIDTH * 0.8)
        else if (x > o) setMedal(WINDOW_WIDTH * 0.1)
        else if (x == o) setMedal(0)
    }

    const winner = (win: boolean) => {
        if (!win) setO(o + 1)
        else if (win) setX(x + 1)
    }

    const action = (op: boolean) => {
        setVisible(true)
        let botton = 0
        let bgcOpacity = 0.85
        if (op == false) {
            bgcOpacity = 0
            botton = -WINDOW_HEIGTH * 0.3
            setTimeout(() => { setVisible(false) }, 300);
        }

        Animated.timing(opacity, {
            toValue: bgcOpacity,
            duration: 300,
            useNativeDriver: false
        }).start()
        Animated.timing(position, {
            toValue: botton,
            duration: 300,
            useNativeDriver: false
        }).start();
    }

    return (
        <>
            {visible &&
                <>
                    <Animated.View onTouchStart={() => action(false)} style={[styles.container, { opacity: opacity }]} />

                    <Animated.View style={[styles.modal, { bottom: position }]}>

                        <TouchableOpacity onPress={() => action(false)} style={styles.close}>
                            <MaterialIcons name="cancel" size={35} color={colorSecundary} />
                        </TouchableOpacity>

                        <View style={[styles.contente, { marginBottom: WINDOW_HEIGTH * 0.03 }]}>
                            <Text style={styles.title}>X</Text>
                            <Text style={styles.title}>O</Text>
                        </View>

                        <View style={styles.contente}>
                            <Text style={styles.value}>{x}</Text>
                            <Text style={styles.value}>{o}</Text>
                        </View>

                        {medal != 0 &&
                            <MaterialCommunityIcons name="medal" style={[styles.medal, { left: medal }]}
                                size={WINDOW_WIDTH * 0.1} color={colorSecundary} />
                        }

                    </Animated.View>
                </>
            }
        </>
    );
})

export default PlacarVelha