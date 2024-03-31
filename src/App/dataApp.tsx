import { lazy } from "react";
const IndexTags = lazy(() => import("../pages/tags/IndexTags"));
const Error404 = lazy(() => import("../pages/Error404"));

export const dataRoutes = [
  { path: "/", element: <IndexTags /> },
  { path: "*", element: <Error404 /> },
];
