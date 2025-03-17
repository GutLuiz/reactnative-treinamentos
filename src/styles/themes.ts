
import { colors } from "./colors";

interface Theme {
    primaryColor: string;
    backgroundColor: string;
    modalColor: string;
    fontColor: string;
    font2Color: string;
    grayVLight: string;
    red: string;
    green: string;
    yellow: string;
}

export const lightl: Theme = {
    primaryColor: colors.orange.primary,
    backgroundColor: colors.gray.back,
    modalColor: colors.white,
    fontColor: colors.black.primary,
    font2Color: colors.gray.light,
    grayVLight: colors.gray.vlight,
    red: colors.red.primary,
    green: colors.green.primary,
    yellow: colors.yellow.primary,
};


