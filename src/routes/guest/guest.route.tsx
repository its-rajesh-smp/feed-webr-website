import Auth from "@/pages/auth/Auth";
import CollectReview from "@/pages/collect-review/CollectReview";
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
    element: <CollectReview />,
  },
];

export default guestRoutes;
