import { DrawerNavigator , StackNavigator } from 'react-navigation';
import InrtoductionPage from './Pages/Introduction';
import MainPage from './Pages/Main';
import SignPage from './Pages/Sign';
import SettingsPage from './Pages/Settings';

export const drawerRoutes = DrawerNavigator({
	Main: {
		screen: MainPage,
	},
	Settings: {
		screen: SettingsPage,
	},
});

export const routes = StackNavigator({
	Inrtoduction: {
		screen: InrtoductionPage,
	},
	Sign: {
		screen: SignPage,
	},
	Main: drawerRoutes,
}, {
  initialRouteName: 'Inrtoduction',
  headerMode: 'none',
});
