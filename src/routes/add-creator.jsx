import { Form } from "react-router-dom";
import { supabase } from "../client";
import { redirect } from "react-router-dom";

export async function action({ request }) {
	const formData = await request.formData();
	const newCreator = Object.fromEntries(formData);
	console.log(newCreator);

	await supabase.from("creators").insert(newCreator);

	return redirect("/");
}

export default function AddCreator() {
	return (
		<Form method="post" id="creator-form">
			<label>
				<span>Name</span>
				<input type="text" name="name" />
			</label>
			<label>
				<span>URL</span>
				<input type="text" name="url" />
			</label>
			<label>
				<span>Description</span>
				<input type="text" name="description" />
			</label>
			<label>
				<span>Image URL</span>
				<input type="text" name="imageURL" />
			</label>
			<button type="submit">Submit</button>
		</Form>
	);
}
