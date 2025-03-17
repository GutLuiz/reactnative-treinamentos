import {
    StyleSheet,
    ViewStyle,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { IconNameProps } from "./drawer-button";

type ButtonBar = TouchableOpacityProps & {
    icon: IconNameProps;
    style?: ViewStyle;
};

export const ButtonAppBar: React.FC<ButtonBar> = ({
    icon,
    style,
    ...rest
}) => {
    return (
        <TouchableOpacity style={styles.buttonTouch} {...rest}>
            <MaterialIcons name={icon} size={24} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonTouch: {
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 10,
    }
})

