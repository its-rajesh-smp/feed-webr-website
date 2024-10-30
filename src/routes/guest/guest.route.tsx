import Auth from "@/pages/auth/Auth";
import Feedback from "@/pages/feedback/Feedback";
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
      {
        path: "/register",
        element: <Auth />,
      },
    ],
  },
  {
    path: "/:accessUrl",
    element: <Feedback />,
  },
];

export default guestRoutes;
