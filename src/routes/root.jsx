import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<>
			<h1>Creatorverse</h1>
			<Link to="">Show all creators</Link>
			<Link to="add">Add a creator</Link>
			<Outlet />
		</>
	);
}
