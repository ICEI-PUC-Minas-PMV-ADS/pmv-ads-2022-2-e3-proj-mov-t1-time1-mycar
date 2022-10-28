import { View } from "react-native";
import Login from "../AutoApp/src/Screens/02-Login";
import ChooseProfile from "../AutoApp/src/Screens/03-ChooseProfile";
import OwnerRegistration from "../AutoApp/src/Screens/04-OwnerRegistration";
import GarageRegistration from "../AutoApp/src/Screens/05-GarageRegistration";
import Home from "../AutoApp/src/Screens/06-Home";
import PersonalInformation from "../AutoApp/src/Screens/07-PersonalInformation";
import DataAlteration from '../AutoApp/src/Screens/08-ChangeData'
import Owners from "../AutoApp/src/Screens/10-ForOwners";
import MyVehicles from "../AutoApp/src/Screens/11-MyVehicles";
import ModalCar from "./src/Screens/12-ModalCar"
import AddAutos from '../AutoApp/src/Screens/13-AddAutomobiles'
import MyMaintenances from "../AutoApp/src/Screens/14-MyMaintenances";
import ModalMaintenance from "./src/Screens/15-ModalMaintenance";
import AddMaintenance from '../AutoApp/src/Screens/16-MaintenancesDone'
import Garages from "../AutoApp/src/Screens/17-ForGarages";
import MyServices from "../AutoApp/src/Screens/18-MyServices"
import AddServices from "../AutoApp/src/Screens/20-RegisterService";
import Publicity from "../AutoApp/src/Screens/21-Publicity";
import Ads from '../AutoApp/src/Screens/23-RegisterAd';
import Maps from '../AutoApp/src/Screens/09-Maps';

export default function App() {
  return (
    <View>
      <Maps />
    </View>
);
}
