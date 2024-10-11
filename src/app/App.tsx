import useFetchUser from "@/pages/auth/hooks/useFetchUser";
import router from "@/routes/router";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  useFetchUser();

  return <RouterProvider router={router} />;
}

export default App;
