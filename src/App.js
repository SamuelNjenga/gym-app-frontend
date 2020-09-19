import React from 'react';
import Home from './components/Home';
import Login from './components/user/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/user/signup/Registration';
import { LoginProvider } from './components/contexts/LoginContext';
import Logout from './components/user/logout/Logout';
import Equipment from './components/equipments/Equipment';
import UploadEquipment from './components/equipments/UploadEquipment';
import ViewEquipment from './components/equipments/ViewEquipmentPicture';
import EquipmentList from './components/equipments/EquipmentList';
import SessionRegister from './components/sessions/SessionRegister';
import ViewSessions from './components/sessions/ViewSessions';
import { TrainerProvider } from './components/contexts/TrainerContext';
import { RoomProvider } from './components/contexts/RoomContext';
import { DepartmentProvider } from './components/contexts/DepartmentContext';
import { EquipmentProvider } from './components/contexts/EquipmentContext';
import { SessionProvider } from './components/contexts/SessionContext';
const App = () => {
	return (
		<SessionProvider>
		<EquipmentProvider>
		<DepartmentProvider>
		<RoomProvider>
		<TrainerProvider>
		<LoginProvider>
			<Router>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/session" exact={true} component={ViewSessions} />
					<Route path="/session/register" component={SessionRegister} />
					<Route path="/equipment" exact={true} component={Equipment} />
					<Route path="/uploadequipment" exact={true} component={UploadEquipment} />
					<Route path="/editequipments" exact={true} component={ViewEquipment} />
					<Route path="/viewequipments" exact={true} component={EquipmentList} />
					<Route path="/login" exact={true} component={Login} />
					<Route path="/logout" exact={true} component={Logout} />
					<Route path="/registration" exact={true} component={Registration} />
				</Switch>
			</Router>
		</LoginProvider>
		</TrainerProvider>
		</RoomProvider>
		</DepartmentProvider>
		</EquipmentProvider>
		</SessionProvider>
	);
};

export default App;
