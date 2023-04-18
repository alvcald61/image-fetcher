import React from "react";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getInterestImages } from "./services/InterestImages";
import { getImagePerTags } from "./services/TagImages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    loader: getInterestImages,
  },
  {
    path: "/tag/:tagName",
    Component: MainPage,
    loader: getImagePerTags,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
