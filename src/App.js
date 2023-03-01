import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { coffeesLoader, dialsLoader } from "./routes/loaders";

import Coffees from "./components/Coffees/Coffees";
import Dials from "./components/Dials/Dials";
import ErrorPage from "./routes/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Coffees />,
    errorElement: <ErrorPage />,
    loader: coffeesLoader,
    // children: {
    //   path: "coffees/:coffeeId",
    //   element: <Coffee />,
    // },
  },
  {
    path: ":cofffId/dials",
    element: <Dials />,
    errorElement: <ErrorPage />,
    loader: dialsLoader,
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
