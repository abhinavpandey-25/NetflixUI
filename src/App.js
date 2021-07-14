import React, { useEffect } from "react";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				//login
				console.log(userAuth);
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				//logout
				console.log("hello");
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch]);
	return (
		<div className="App">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route path="/profile">
							<ProfileScreen />
						</Route>
						<Route exact path="/">
							<HomeScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
