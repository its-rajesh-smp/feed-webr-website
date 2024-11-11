const PRIVATE_ROUTE_PATHS = {
  ROOT: "/",

  // Overview
  OVERVIEW: "/overview",

  // Dashboard
  DASHBOARD: `/dashboard/:workspaceId`,

  // Dashboard Inbox
  DASHBOARD_INDEX: `/dashboard/:workspaceId/inbox/:inboxType`,

  // Dashboard Setting
  DASHBOARD_SETTING: `/dashboard/:workspaceId/setting`,
  DASHBOARD_SETTING_WEBHOOK: `/dashboard/:workspaceId/setting/webhook`,
};

export default PRIVATE_ROUTE_PATHS;
