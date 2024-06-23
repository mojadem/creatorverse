import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1>Creatorverse</h1>
      <Outlet />
    </>
  );
}
