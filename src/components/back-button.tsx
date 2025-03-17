
import { Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";


interface BackButtonProps {
    targetScreen?: any;
}

export const BackButton: React.FC<BackButtonProps> = ({ targetScreen }) => {
    const onBackPress = () => {
        if (targetScreen) {
            router.replace(targetScreen);
        }
    };
    return (
        <Pressable style={styles.pressable} onPress={onBackPress}>
            <MaterialIcons
                style={styles.icon}
                name="arrow-back"
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
