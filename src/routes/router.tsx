import { createBrowserRouter } from "react-router-dom";
import guestRoutes from "./guest/guest.route";

const router = createBrowserRouter([...guestRoutes]);

export default router;
