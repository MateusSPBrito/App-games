import { useState, useEffect } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WINDOW_WIDTH } from '../../constants/screen';

export default function ButtonReset({ action, condition }: any) {
    const [position] = useState(new Animated.Value(90))
    const [opacity] = useState(new Animated.Value(0))

    useEffect(() => {
        animated()
    }, [condition])

    const animated = () => {
        let opacityValue = 0
        let positionValue = -WINDOW_WIDTH * 0.2
        if(condition == true){
            opacityValue = 1
            positionValue = 90
        }

        Animated.timing(position, {
            toValue: positionValue,
            duration: 300,
            useNativeDriver: false
        }).start();
        Animated.timing(opacity, {
            toValue: opacityValue,
            duration: 500,
            useNativeDriver: false
        }).start();
    }

    return (
        <Animated.View style={[styles.container, { top: position, opacity: opacity }]}>
            <TouchableOpacity style={styles.reset} onPress={() => action()}>
                <MaterialCommunityIcons name="restart" size={WINDOW_WIDTH * 0.15} color="black" />
            </TouchableOpacity>
        </Animated.View>
    );
}