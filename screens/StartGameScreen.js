//맞혀야 할 숫자를 고르고 게임을 시작하는 화면
import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {

    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1, 스타일링 객체가 가능한 많은 공간 차지
        justifyContent:'center', //세로축을 따라 요소 설정
        alignItems: 'center', //가로축을 따라 요소 설정, 텍스트에 필요할 정도로만 버튼 크기가 제한됨
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24, //양 옆에 간격
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4, //안드로이드에서 그림자 넣는 프로퍼티
        shadowColor: 'black', //ios에서 그림자 넣는 프로퍼티
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.3
    },
    numberInput: {
        height: 50, //요소 너비 제한
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row', //버튼 가로 정렬
    },
    buttonContainer: {
        flex: 1
    }
})