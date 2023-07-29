import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  //bind는 나중에 실행할 함수를 미리 조정할 수 있게 한다.
  return (
    <View style={styles.goalItem}>
        <Pressable
            android_ripple={{ color: "#210644" }}
            onPress={props.onDeleteItem.bind(this, props.id)}
            style = {({pressed}) => pressed && styles.pressedItem}
        >
        <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
