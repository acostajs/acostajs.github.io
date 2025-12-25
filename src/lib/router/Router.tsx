import { useState } from "react";
import type { ReactElement } from "react";
import { NavigationContext, RouteContext } from "./context.ts";
import type { RouteProps } from "./Route.tsx";
import type { Params } from "./types.ts";

type RouteConfig = {
  path: string;
  element: ReactElement<RouteProps>;
  params: Params;
};

type RouterProps = {
  children: ReactElement<RouteProps> | Array<ReactElement<RouteProps>>;
};

/**
 * Render the child `Route` component whose `path` prop matches the
 * current pathname. You must use the `Link` component to navigate to
 * another page.
 */
export function Router({ children }: RouterProps) {
  const [pathname, setPathname] = useState(window.location.pathname);

  const childrenArray = Array.isArray(children) ? children : [children];
  const routes: Array<RouteConfig> = childrenArray.map((child) => ({
    path: child.props.path,
    element: child,
    params: {},
  }));

  const routeToRender = match(pathname, routes);
  if (routeToRender === null) return <>404</>;

  return (
    <NavigationContext.Provider
      value={{
        pathname,
        setPathname: (to: string) => {
          // update URL bar
          window.history.pushState({}, "", to);
          // update React state -> rerender Router
          setPathname(to);
        },
      }}
    >
      <RouteContext.Provider value={routeToRender.params}>
        {routeToRender.element}
      </RouteContext.Provider>
    </NavigationContext.Provider>
  );
}

/**
 * Match the given path to a route. Return null if no matching route
 * is found.
 */
function match(
  currentPath: string,
  routes: Array<RouteConfig>,
): RouteConfig | null {
  const currentSegments = segment(currentPath);
  for (const route of routes) {
    if (matchesRoute(currentSegments, route)) return route;
  }
  return null;
}

/**
 * Split the given path into "/" separated segments.
 */
function segment(path: string): Array<string> {
  return path.split("/").filter((segment) => segment.length > 0);
}

/**
 * Return true if the path segments matches the given route.
 * Also populate the route's params.
 */
function matchesRoute(
  currentSegments: Array<string>,
  route: RouteConfig,
): boolean {
  const routeSegments = segment(route.path);

  if (currentSegments.length !== routeSegments.length) return false;

  for (let i = 0; i < currentSegments.length; i++) {
    const routeSegment = routeSegments[i];
    const pathSegment = currentSegments[i];

    if (routeSegment === undefined || pathSegment === undefined) {
      throw new Error();
    }

    const isParam = routeSegment.startsWith(":");
    if (isParam) {
      route.params[routeSegment.slice(1)] = pathSegment;
      continue;
    }

    if (routeSegment !== pathSegment) return false;
  }

  return true;
}
