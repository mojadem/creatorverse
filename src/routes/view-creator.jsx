import { useLoaderData } from "react-router-dom";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

export async function loader({ params }) {
	const { data } = await supabase
		.from("creators")
		.select()
		.eq("id", params.creatorID);

	return data[0];
}

export default function ViewCreator() {
	const creator = useLoaderData();

	return (
		<>
			<CreatorCard {...creator} />
		</>
	);
}
