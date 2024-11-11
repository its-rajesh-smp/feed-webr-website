import getRoutePath from "@/common/utils/route.util";
import PRIVATE_ROUTE_PATHS from "@/routes/constants/privatePath.const";
import { HardDrive, Inbox, Settings, Text, Webhook } from "lucide-react";
import { RiAttachment2 } from "react-icons/ri";

const SidebarMenus = {
  overview: {
    name: "Inbox",
    path: PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX,
    icon: <Inbox />,
    options: {
      all: {
        name: "All",
        path: getRoutePath(PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX, {
          inboxType: "all",
        }),
        icon: <HardDrive />,
      },
      text: {
        name: "Texts",
        path: getRoutePath(PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX, {
          inboxType: "texts",
        }),
        icon: <Text />,
      },
      files: {
        name: "Attachments",
        path: getRoutePath(PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX, {
          inboxType: "attachments",
        }),
        icon: <RiAttachment2 />,
      },
    },
  },
  settings: {
    name: "Settings",
    path: PRIVATE_ROUTE_PATHS.DASHBOARD_SETTING,
    icon: <Settings />,
    options: {
      webhooks: {
        name: "Webhooks",
        path: PRIVATE_ROUTE_PATHS.DASHBOARD_SETTING_WEBHOOK,
        icon: <Webhook />,
      },
    },
  },
};

export default SidebarMenus;
