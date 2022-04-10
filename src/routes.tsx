import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import Home from './views/Home';
import Dashboard from './views/Dashboard';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
