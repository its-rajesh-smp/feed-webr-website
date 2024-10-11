import useFetchUser from "@/pages/auth/hooks/useFetchUser";
import Loading from "@/pages/loading/Loading";
import router from "@/routes/router";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const [loading] = useFetchUser();

  if (loading) {
    return <Loading />;
  }

  return <RouterProvider router={router} />;
}

export default App;
