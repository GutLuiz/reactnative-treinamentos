import { Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export const MenuButton: React.FC = () => {
    const navigation = useNavigation();
    const toggleMenu = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };
    return (
        <Pressable style={styles.pressable} onPress={toggleMenu}>
            <MaterialIcons
                style={styles.icon}
                name="menu"
                size={24}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    icon: {
        paddingLeft: 15,
    },
});
