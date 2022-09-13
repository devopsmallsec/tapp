import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { width_screen } from "../../utils/dimensions";

interface BtnMainProps {
  style?: ViewStyle;
  title: string;
  onPress?: () => void;
}

export const ActionBtn = (props: BtnMainProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btn_container}>
      <Text style={styles.btn_text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export const LinkBtn = (props: BtnMainProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.action_text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

let paddingHorizontal = width_screen * 0.05;
// multiply padding by 3 so it can look cleaner and more aligned.
// multiplying by two will always leave button to look extremely larger than text above
let btn_width = width_screen - paddingHorizontal * 3;
let btn_height = 50;

const styles = StyleSheet.create({
  btn_container: {
    backgroundColor: "#ee6e88",
    width: btn_width,
    height: btn_height,
    borderRadius: btn_height * 0.5,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  btn_text: {
    color: "#fff",
    fontSize: 20,
  },
  action_text: {
    fontSize: 16,
    color: "#ee6e88",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
  },
});
