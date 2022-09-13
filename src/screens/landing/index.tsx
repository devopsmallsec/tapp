import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import tapp_logo from "../../images/tapp_logo.png";
import bg_image from "../../images/bg_image.png";
import { width_screen } from "../../utils/dimensions";
import { ActionBtn, LinkBtn } from "../../components/buttons/main";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../utils/routes";
import { StackNavigationProp } from "@react-navigation/stack";

interface LandingScreenProps {}

export type RootStackParamList = {
  LandingScreen: {};
};
export default function LandingScreen(props: LandingScreenProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onRegisterNav = () => {
    let payload = {
      page: "register",
    };
    navigation.navigate(ROUTES.Authentication as never, payload as never);
  };
  const onLoginNav = () => {
    let payload = {
      page: "login",
    };
    navigation.navigate(ROUTES.Authentication as never, payload as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={tapp_logo} style={styles.logo} />
        <View style={styles.motto_container}>
          <Text style={styles.motto}>
            Share privately with your own network.
          </Text>
        </View>
        <View>
          <ActionBtn onPress={onRegisterNav} title="Create an Account" />
          <LinkBtn
            onPress={onLoginNav}
            title="Already have an account? Log In"
          />
        </View>
      </View>
      <Image source={bg_image} style={styles.bg_image} />
    </View>
  );
}

let paddingHorizontal = width_screen * 0.05;
// multiply padding by 3 so it can look cleaner and more aligned.
// multiplying by two will always leave button to look extremely larger than text above
let btn_width = width_screen - paddingHorizontal * 3;
let btn_height = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeeef",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#ffeeef",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 50,
  },
  logo: {
    width: 155,
    height: 34,
  },
  motto: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600",
    color: "#333",
  },
  motto_container: {
    paddingHorizontal: paddingHorizontal,
  },
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
  // image
  bg_image: {
    width: width_screen,
    height: 300,
  },
});
