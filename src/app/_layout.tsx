import { Drawer } from "expo-router/drawer";
import { DrawerContent } from "../components/drawer-content";
import { CustomOptions } from "../types/navigation";
export default function Drawerlayout() {
    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerStyle: { width: "75%" },
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="relatorios"
                options={
                    { title: "relatorios", iconName: "bar-chart" } as CustomOptions
                }
            />
        </Drawer>
    )
}