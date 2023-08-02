//맞혀야 할 숫자를 고르고 게임을 시작하는 화면
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1, 스타일링 객체가 가능한 많은 공간 차지
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24, //양 옆에 간격
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4, //안드로이드에서 그림자 넣는 프로퍼티
        shadowColor: 'black', //ios에서 그림자 넣는 프로퍼티
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.3
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold'
    },
})