import InrtoductionPage from './Pages/Introduction';
import MainPage from './Pages/Main';
import SignPage from './Pages/Sign';

export const routes = {
	Inrtoduction: {
		screen: InrtoductionPage,
	},
	Sign: {
		screen: SignPage,
	},
	Main: {
		screen: MainPage,
	},
};

export const config = {
  initialRouteName: 'Inrtoduction',
  headerMode: 'none',
};
