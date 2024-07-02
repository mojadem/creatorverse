import { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

export default function ShowCreators() {
	const [creators, setCreators] = useState([]);

	useEffect(() => {
		getCreators();
	}, []);

	async function getCreators() {
		const { data } = await supabase.from("creators").select();
		setCreators(data);
	}

	return (
		<>
			{creators.length === 0 ? (
				<div>empty</div>
			) : (
				creators.map((creator) => {
					return <CreatorCard key={creator.id} {...creator} />;
				})
			)}
		</>
	);
}
