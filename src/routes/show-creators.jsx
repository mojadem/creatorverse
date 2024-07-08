import { useLoaderData } from "react-router-dom";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

export async function loader() {
  const { data } = await supabase.from("creators").select();
  return data;
}

export default function ShowCreators() {
  const creators = useLoaderData();

  return (
    <>
      {creators.length ? (
        creators.map((creator) => {
          return <CreatorCard key={creator.id} {...creator} />;
        })
      ) : (
        <div>empty</div>
      )}
    </>
  );
}
