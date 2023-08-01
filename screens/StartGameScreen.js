//맞혀야 할 숫자를 고르고 게임을 시작하는 화면
import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;