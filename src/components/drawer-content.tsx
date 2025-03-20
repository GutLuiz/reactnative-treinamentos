import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DrawerButton } from "./drawer-button";
import { CustomOptions } from "../types/navigation";



export const DrawerContent = (drawerProps: DrawerContentComponentProps) => {
    return (
        <View style={styles.drawer}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 42,
                    height: "100%",
                }}
            >
                <View style={{ marginTop: 8 }}>
                    {/*
                    este trecho de código é responsável por mapear as rotas do drawer e criar um botão para cada rota que será exibido no menu lateral. 
                    */}
                    {drawerProps.state.routes.map((route) => {
                        const options = drawerProps.descriptors[route.key]
                            .options as CustomOptions;

                        if (options.title === undefined) {
                            return;
                        }

                        const onPress = () => {
                            const event = drawerProps.navigation.emit({
                                type: "drawerItemPress",
                                canPreventDefault: true,
                                target: route.key,
                            });

                            if (!event?.defaultPrevented) {
                                drawerProps.navigation.navigate(route.name, route.params);
                            }
                        };

                        return (
                            <View key={route.key}>
                                <DrawerButton
                                    onPress={onPress}
                                    title={options.title}
                                    iconName={options.iconName}
                                />
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        overflow: "hidden",
    },
    drawerTopo: {
        marginVertical: 20,
        paddingLeft: 20,
        width: "100%",
        flexDirection: "row",
    },
    drawerImage: {
        width: 80,
        height: 80,
        marginRight: 15,
    },
});