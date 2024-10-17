import Dashboard from "@/pages/dashboard/Dashboard";
import Overview from "@/pages/overview/Overview";
import PrivateGuard from "../guards/PrivateGuard";
import PRIVATE_ROUTE_PATHS from "../constants/privatePath.const";

const privateRoutes = [
  {
    element: <PrivateGuard />,
    children: [
      {
        path: PRIVATE_ROUTE_PATHS.ROOT,
        element: <Overview />,
      },
      {
        path: PRIVATE_ROUTE_PATHS.OVERVIEW,
        element: <Overview />,
      },
      {
        path: PRIVATE_ROUTE_PATHS.DASHBOARD,
        element: <Dashboard />,
      },
    ],
  },
];

export default privateRoutes;
