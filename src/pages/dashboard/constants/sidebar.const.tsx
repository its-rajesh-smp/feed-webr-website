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
        path: PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX_ALL,
        icon: <HardDrive />,
      },
      text: {
        name: "Text",
        path: PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX_TEXT,
        icon: <Text />,
      },
      files: {
        name: "Files",
        path: PRIVATE_ROUTE_PATHS.DASHBOARD_INDEX_FILES,
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
