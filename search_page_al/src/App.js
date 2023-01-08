import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import MinDash from '../src/components/minDashboard';
import Create from '../src/components/Create';

class App extends Component {
render() {
	return (
	<Router>
		<Routes>
				<Route exact path='/' element={< Create />}></Route>
				<Route exact path='/mindash' element={< MinDash />}></Route>
		</Routes>
	</Router>
);
}
}

export default App;
