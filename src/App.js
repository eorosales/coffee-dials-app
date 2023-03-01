import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { coffeesLoader, dialsLoader } from "./routes/loaders";

import Coffees from "./components/Coffees/Coffees";
import Dials from "./components/Dials/Dials";
import ErrorPage from "./routes/errorPage";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Coffees />
      </Layout>
    ),
    errorElement: <ErrorPage />,
    loader: coffeesLoader,
  },
  {
    path: "dials",
    element: (
      <Layout>
        <Dials />
      </Layout>
    ),
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
