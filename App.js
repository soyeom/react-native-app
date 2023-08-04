import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
    //사용자가 선택한 숫자로 처음에는 숫자가 없기 때문에 null
    const [userNumber, setUserNumber] = useState();

    function pickedNumberHandler(pickedNumber) {
        //숫자가 확인되면 pickedNumber를 얻는다.
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        //유효한 숫자인 경우
        screen = <GameScreen />
    }

    return (
        <LinearGradient colors={['#ddb52f', '#4e0329']} style={styles.rootScreen}>
            <ImageBackground 
                source={require('./assets/images/background.png')} 
                resizeMode="cover" 
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                {screen}
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        //필요한 공간만 차지하기 때문에 
        //StartGameScreen이 차지하고 있는 공간만큼만 배경색이 적용됨
        flex: 1, //화면 전체에 배경색 적용
    },
    backgroundImage: {
        opacity: 0.15
    }
});