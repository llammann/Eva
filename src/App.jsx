import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import userNavbar from "./layout/userNavbar";
import { routes } from "./routes/routes";
function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <userNavbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
