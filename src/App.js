import React from 'react';
import Home from './components/Home';
import Login from './components/user/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/user/signup/Registration';
import { LoginProvider } from './components/user/login/LoginContext';
import Logout from './components/user/logout/Logout';
import Equipment from './components/equipments/Equipment';
import UploadEquipment from './components/equipments/UploadEquipment';
import ViewEquipment from './components/equipments/ViewEquipment';
const App = () => {
	return (
		<LoginProvider>
			<Router>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/equipment" exact={true} component={Equipment} />
					<Route path="/uploadequipment" exact={true} component={UploadEquipment} />
					<Route path="/viewequipments" exact={true} component={ViewEquipment} />
					<Route path="/login" exact={true} component={Login} />
					<Route path="/logout" exact={true} component={Logout} />
					<Route path="/registration" exact={true} component={Registration} />
				</Switch>
			</Router>
		</LoginProvider>
	);
};

export default App;
