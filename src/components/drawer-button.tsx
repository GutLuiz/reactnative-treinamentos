
import { MaterialIcons } from "@expo/vector-icons";
import {
    View,
    Text,
    Pressable,
    PressableProps,
    StyleSheet,
} from "react-native";

export type IconNameProps = keyof typeof MaterialIcons.glyphMap;

type DrawerButtonProps = PressableProps & {
    title?: string;
    iconName?: IconNameProps;
};

export const DrawerButton: React.FC<DrawerButtonProps> = ({
    title,
    iconName,
    ...rest
}: DrawerButtonProps) => {
    return (
        <Pressable {...rest}>
            <View style={styles.presable}>
                <MaterialIcons
                    name={iconName}
                    size={24}
                />
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    presable: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        height: 52,
        paddingHorizontal: 24,
        marginLeft: 12,
    },
    text: {
        fontSize: 18,
    },
});
