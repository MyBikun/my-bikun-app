import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const CustomDrawer = (props) => {
  const { role, setRole } = useContext(AuthContext);

  const onLogout = () => {
    setRole(null);
    props.navigation.navigate("Home");
  };

  return (
    <DrawerContentScrollView {...props} style={{ marginTop: 40 }}>
      <DrawerItemList {...props} />
      {!!role && <DrawerItem label="Logout" onPress={onLogout} />}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
