import Overview from "@/pages/overview/Overview";
import PrivateGuard from "../guards/PrivateGuard";

const privateRoutes = [
  {
    element: <PrivateGuard />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/practice",
        element: <Overview />,
      },
    ],
  },
];

export default privateRoutes;
