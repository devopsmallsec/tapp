import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActionBtn } from "../../components/buttons/main";

interface AuthScreenProps {}

export default function AuthScreen(props: AuthScreenProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text>Auth Page</Text>
      <ActionBtn onPress={handleGoBack} title="Go Back" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeeef",
    alignItems: "center",
    justifyContent: "center",
  },
});
