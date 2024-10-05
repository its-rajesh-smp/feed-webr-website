import Auth from "@/pages/auth/Auth";
import GuestGuard from "../guards/GuestGuard";

const guestRoutes = [
  {
    element: <GuestGuard />,
    children: [
      {
        path: "/",
        element: <Auth />,
      },
      {
        path: "/login",
        element: <Auth />,
      },
    ],
  },
];

export default guestRoutes;
