import { Link } from "react-router-dom";

function CreatorCard({ id, name, url, description, imageURL }) {
	return (
		<>
			<div>CreatorCard</div>
			<Link to={`${id}`}>{id}</Link>
			<div>{name}</div>
			<div>{url}</div>
			<div>{description}</div>
			<div>{imageURL}</div>
			<Link to={`edit/${id}`}>Edit</Link>
		</>
	);
}

export default CreatorCard;
