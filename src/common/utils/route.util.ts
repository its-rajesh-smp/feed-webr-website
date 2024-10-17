type RouteParams = Record<string, string | number>;

function getRoutePath(route: string, params?: RouteParams): string {
  let path = route;
  if (params) {
    Object.keys(params).forEach((key) => {
      const value = params[key];
      path = path.replace(`:${key}`, value.toString());
    });
  }
  return path;
}

export default getRoutePath;
