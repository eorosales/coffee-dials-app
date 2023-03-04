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
import NewCoffeeForm from "./components/NewCoffeeForm/NewCoffeeForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewCoffeeForm />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "new",
        element: <NewCoffeeForm />,
        loader: coffeesLoader,
      },
    ],
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
