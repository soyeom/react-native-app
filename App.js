import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
    return (
        <LinearGradient colors={['#ddb52f','#4e0329']} style={styles.rootScreen}>
            <StartGameScreen />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        //필요한 공간만 차지하기 때문에 
        //StartGameScreen이 차지하고 있는 공간만큼만 배경색이 적용됨
        flex: 1, //화면 전체에 배경색 적용
    }
});