import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
function Nav() {
	const [show, handleshow] = useState(false);
	const history = useHistory();
	const transitionNavBar = () => {
		console.log(show);
		if (window.scrollY > 100) {
			handleshow(true);
		} else {
			handleshow(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);
	return (
		<div className={`nav ${show && "nav_black"} `}>
			<div className="nav_contents">
				<img
					className="nav_logo"
					src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt="not found"
					onClick={() => history.push("/")}
				/>
				<img
					className="nav_avatar"
					src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_200x200.png"
					alt="ah"
					onClick={() => history.push("/profile")}
				/>
			</div>
		</div>
	);
}

export default Nav;
