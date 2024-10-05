import Auth from "@/pages/auth/Auth";
import GuestGuard from "../guards/GuestGuard";

const guestRoutes = [
  {
    path: "/",
    element: <GuestGuard />,
    children: [
      {
        path: "/",
        element: <Auth />,
      },
    ],
  },
];

export default guestRoutes;
