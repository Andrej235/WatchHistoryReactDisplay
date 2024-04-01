import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchResults from "./Components/SearchResults/SearchResults";
import searchResultsLoader from "./Components/SearchResults/SearchResultsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/search/:searchterm",
    element: <SearchResults />,
    loader: searchResultsLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
