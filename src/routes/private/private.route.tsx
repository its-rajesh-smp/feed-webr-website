import Inbox from "@/pages/dashboard/components/views/inbox/Inbox";
import Setting from "@/pages/dashboard/components/views/setting/Setting";
import Dashboard from "@/pages/dashboard/Dashboard";
import Overview from "@/pages/overview/Overview";
import PRIVATE_ROUTE_PATHS from "../constants/privatePath.const";
import PrivateGuard from "../guards/PrivateGuard";

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
        children: [
          {
            path: PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX,
            element: <Inbox />,
            children: [
              {
                path: PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX_ALL,
                element: <Inbox />,
              },
              {
                path: PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX_TEXT,
                element: <Inbox />,
              },
              {
                path: PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX_FILES,
                element: <Inbox />,
              },
            ],
          },
          {
            path: PRIVATE_ROUTE_PATHS.DASHBOARD_SETTING,
            element: <Setting />,
            children: [
              {
                path: PRIVATE_ROUTE_PATHS.DASHBOARD_SETTING_WEBHOOK,
                element: <Setting />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default privateRoutes;
