import { createBrowserRouter } from "react-router-dom";
import guestRoutes from "./guest/guest.route";
import privateRoutes from "./private/private.route";

const router = createBrowserRouter([...guestRoutes, ...privateRoutes]);

export default router;
