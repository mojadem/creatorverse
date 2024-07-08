import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header className="container">
        <nav>
          <ul>
            <li>
              <h1>Creatorverse</h1>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="">Show all creators</Link>
            </li>
            <li>
              <Link to="add">Add a creator</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
