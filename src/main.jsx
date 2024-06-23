import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowCreators from "./routes/show-creators";
import AddCreator from "./routes/add-creator";
import Root from "./routes/root";
import ViewCreator from "./routes/view-creator";
import EditCreator from "./routes/edit-creator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <ShowCreators />,
      },
      {
        path: "new",
        element: <AddCreator />,
      },
      {
        path: ":creatorID",
        element: <ViewCreator />,
      },
      {
        path: "edit/:creatorID",
        element: <EditCreator />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
