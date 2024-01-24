import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="nav justify-content-end">			
			<div className="ml-auto">
				<Link to="/create">
					<button type="button" className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};