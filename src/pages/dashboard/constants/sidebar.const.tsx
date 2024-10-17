import { HardDrive, Inbox, Settings, Text, Webhook } from "lucide-react";
import { RiAttachment2 } from "react-icons/ri";

const SidebarMenus = {
  overview: {
    name: "Inbox",
    path: "/inbox",
    icon: <Inbox />,
    options: {
      all: {
        name: "All",
        path: "/all",
        icon: <HardDrive />,
      },
      text: {
        name: "Text",
        path: "/text",
        icon: <Text />,
      },
      files: {
        name: "Files",
        path: "/files",
        icon: <RiAttachment2 />,
      },
    },
  },
  settings: {
    name: "Settings",
    path: "/settings",
    icon: <Settings />,
    options: {
      webhooks: {
        name: "Webhooks",
        path: "/webhooks",
        icon: <Webhook />,
      },
    },
  },
};

export default SidebarMenus;
