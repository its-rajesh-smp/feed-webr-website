import Practice from "@/pages/practice/Practice";
import PrivateGuard from "../guards/PrivateGuard";

const privateRoutes = [
  {
    element: <PrivateGuard />,
    children: [
      {
        path: "/",
        element: <Practice />,
      },
      {
        path: "/practice",
        element: <Practice />,
      },
    ],
  },
];

export default privateRoutes;
