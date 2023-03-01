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
  },
  {
    path: ":coffeeId/dials",
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
