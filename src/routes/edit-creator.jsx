import { Form } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { supabase } from "../client";
import { redirect } from "react-router-dom";

export async function loader({ params }) {
	const { data } = await supabase
		.from("creators")
		.select()
		.eq("id", params.creatorID);

	return data;
}

export async function action({ request, params }) {
	const formData = await request.formData();
	const updatedCreator = Object.fromEntries(formData);

	await supabase
		.from("creators")
		.update(updatedCreator)
		.eq("id", params.creatorID);

	return redirect("/");
}

export default function EditCreator() {
	const [creator] = useLoaderData();

	return (
		<Form method="post" id="creator-form">
			<label>
				<span>Name</span>
				<input type="text" name="name" defaultValue={creator.name} />
			</label>
			<label>
				<span>URL</span>
				<input type="text" name="url" defaultValue={creator.url} />
			</label>
			<label>
				<span>Description</span>
				<input
					type="text"
					name="description"
					defaultValue={creator.description}
				/>
			</label>
			<label>
				<span>Image URL</span>
				<input type="text" name="imageURL" defaultValue={creator.imageURL} />
			</label>
			<button type="submit">Submit</button>
		</Form>
	);
}
