// React importações:
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

//compontens:
import { ButtonAppBar } from './button-appbar';
import { IconNameProps } from './drawer-button';
import { MenuButton } from './menu-button';
import { BackButton } from './back-button';



/*
 Inteface: São importantes para as propriedades sejam passadas de forma correta, ainda assim
 tem a manuntenção facilitada,Com interfaces bem definidas, o código fica mais fácil de manter.
 */

// O primeiro passo de se contruir nossa appbar e colocando as propriedas que ela vai ternas paginas

// -> ":" quer dizer que essa propriedade é obrigatoria, ?: -> Quer dizer que essa propriedade não é obrigatoria
interface AppbarProps {
    titulo: string; // Usando string, pois provavelmente é um texto
    subtitulo?: string; // Subtítulo é opcional e também pode ser string
    menu?: boolean; // menu é opcional e um booleano
    buttonone?: AppBarButton; // O botão deve seguir a interface AppBarButton
    buttonTwo?: AppBarButton;
    buttonthree?: AppBarButton;
}

interface AppBarButton {
    icon: IconNameProps;
    onPressed?: () => void; // onPressed é uma função opcional
}

// passa todos os valores para a const e construa o corpo da sua appbar
export const AppBar: React.FC<AppbarProps> = ({
    titulo,
    menu,
    buttonone,
    buttonTwo,
    buttonthree
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                {menu ? (
                    <View style={styles.titleButton}>
                        <MenuButton />
                    </View>
                ) : null}
                <Text style={styles.titulo}>{titulo}</Text>
            </View>


            <View style={styles.buttons}>
                {buttonone ? (
                    <ButtonAppBar
                        icon={buttonone.icon}
                        onPress={buttonone.onPressed}
                    />
                ) : null}
                {buttonTwo ? (
                    <ButtonAppBar
                        icon={buttonTwo.icon}
                        onPress={buttonTwo.onPressed}
                    />
                ) : null}
                {buttonthree ? (
                    <ButtonAppBar
                        icon={buttonthree.icon}
                        onPress={buttonthree.onPressed}
                    />
                ) : null}
            </View>
        </View>
    );
    // TouchableOpacity: Oferece um efeito visual de opacidade ao ser pressionado. 
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleContainer: {
        flexDirection: "row",
        height: "100%",
        alignItems: "center",
        flex: 1,
    },
    titleButton: {
        height: "100%",
        justifyContent: "center",
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    buttons: {
        flexDirection: "row",
        height: "50%",
        alignItems: "center",
        paddingRight: 5,
    }
});



