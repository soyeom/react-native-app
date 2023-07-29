import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        //새로운 목표를 추가할 때마다 빈칸으로 만듬
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center", //모든 콘텐츠가 중간에 모인다
        alignItems: "center",
        marginBottom: 24,
        padding: 16, // 입력란 바깥쪽 여백
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "100%",
        padding: 8, // TextInput의 안쪽 여백
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16 //텍스트 입력란과 버튼 사이의 여백
    },
    button: {
        width: 100, //버튼 크기
        marginHorizontal: 8 //버튼 사이 여백
    }
});