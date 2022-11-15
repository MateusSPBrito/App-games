import { useState, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ButtonReset from '../../components/button_reset';
import { FontAwesome5 } from '@expo/vector-icons';
import { colorSecundary } from '../../constants/colors';
import PlacarVelha from '../../components/placarVelha';

export default function Velha() {
    const startData = [null, null, null, null, null, null, null, null, null]
    const [positions, setPositions]: any = useState(startData)
    const [turn, setTurn] = useState(0)
    const [message, setMessage] = useState('Vez de O')
    const [isEnd, setIsEnd] = useState(false)

    const placar: any = useRef(null);

    const positionContent = (value: any) => {
        if (value == 0) return 'O'
        if (value == 1) return 'X'
        return ''
    }

    const touchFunction = (index: number) => {
        if (positions[index] == null && !isEnd) {
            positions[index] = turn
            setMessage(turn == 1 ? 'Vez de O' : 'Vez de X')
            result(turn == 0 ? 1 : 0)
            setTurn(turn == 0 ? 1 : 0)
        }
    }

    const result = (player: number) => {
        if (
            positions[0] != null && positions[0] == positions[1] && positions[1] == positions[2] ||
            positions[3] != null && positions[3] == positions[4] && positions[4] == positions[5] ||
            positions[6] != null && positions[6] == positions[7] && positions[7] == positions[8] ||
            positions[0] != null && positions[0] == positions[3] && positions[3] == positions[6] ||
            positions[1] != null && positions[1] == positions[4] && positions[4] == positions[7] ||
            positions[2] != null && positions[2] == positions[5] && positions[5] == positions[8] ||
            positions[0] != null && positions[0] == positions[4] && positions[4] == positions[8] ||
            positions[2] != null && positions[2] == positions[4] && positions[4] == positions[6]
        ) {
            setIsEnd(true)
            setMessage(player == 0 ? 'X ganhou' : 'O ganhou')
            placar.current?.winner(player == 0? true: false)
        }
        else if (
            positions[0] != null && positions[1] != null && positions[2] != null &&
            positions[3] != null && positions[4] != null && positions[5] != null &&
            positions[6] != null && positions[7] != null && positions[8] != null
        ) { 
            setIsEnd(true)
            setMessage('Deu velha')
         }
    }

    const reset = () => {
        setPositions(startData)
        setTurn(0)
        setMessage('Vez de O')
        setIsEnd(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>

                {positions.map((value: any, index: number) =>
                    <TouchableOpacity onPress={() => touchFunction(index)} activeOpacity={value != null || isEnd ? 1 : 0.9} key={index} style={styles.buttom}>
                        <Text style={{ fontSize: 30, color: "#fff" }}>{positionContent(value)}</Text>
                    </TouchableOpacity>
                )}

            </View>
            
            <Text style={{ fontSize: 30, color: "#fff", marginTop: 50 }}>{message}</Text>

            <TouchableOpacity onPress={() => placar.current?.action()} style={styles.placar}>
                <Text style={{ fontSize: 30, color: colorSecundary }}>Placar</Text>
                <View style={styles.icon}>
                    <FontAwesome5 name="long-arrow-alt-up" size={30} color={colorSecundary} />
                </View>
            </TouchableOpacity>

            <ButtonReset action={reset} condition={isEnd} />

            <PlacarVelha ref={placar} />
        </View>
    );
}