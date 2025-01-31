import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCreator, { action as addCreatorAction } from "./routes/add-creator";
import EditCreator, {
  action as editCreatorAction,
  loader as editCreatorLoader,
} from "./routes/edit-creator";
import Root from "./routes/root";
import ShowCreators, {
  loader as showCreatorsLoader,
} from "./routes/show-creators";
import ViewCreator, {
  action as viewCreatorAction,
  loader as viewCreatorLoader,
} from "./routes/view-creator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <ShowCreators />,
        loader: showCreatorsLoader,
      },
      {
        path: "add",
        element: <AddCreator />,
        action: addCreatorAction,
      },
      {
        path: ":creatorID",
        element: <ViewCreator />,
        action: viewCreatorAction,
        loader: viewCreatorLoader,
      },
      {
        path: "edit/:creatorID",
        element: <EditCreator />,
        action: editCreatorAction,
        loader: editCreatorLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
