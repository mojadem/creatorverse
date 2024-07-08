import { Form, redirect, useLoaderData } from "react-router-dom";
import { supabase } from "../client";

export async function loader({ params }) {
  const { data } = await supabase
    .from("creators")
    .select()
    .eq("id", params.creatorID);

  return data;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "edit") {
    return redirect(`/edit/${params.creatorID}`);
  }

  if (intent === "delete") {
    await supabase.from("creators").delete().eq("id", params.creatorID);
  }

  return redirect("/");
}

export default function ViewCreator() {
  const [creator] = useLoaderData();

  return (
    <>
      <h2>{creator.name}</h2>
      <img src={creator.imageURL} alt={`Creator image for ${creator.name}`} />
      <a href={creator.url} target="_blank" className="secondary">
        {creator.url}
      </a>
      <p>{creator.description}</p>
      <Form method="post">
        <button type="submit" name="intent" value="edit">
          Edit
        </button>
        <button
          type="submit"
          name="intent"
          value="delete"
          className="secondary"
        >
          Delete
        </button>
      </Form>
    </>
  );
}
