// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "POS Help Guide",
    href: "/docs/pos-help-guide",
    noLink: true,
    items: [
      { 
        title: "Side Settings Panel",
        href: "/docs/pos-help-guide/side-settings-panel"
      },
      { 
        title: "User Dropdown Menu",
        href: "/docs/pos-help-guide/user-dropdown-menu"
      },
      { 
        title: "Action Icons",
        href: "/docs/pos-help-guide/action-icons"
      }
    ],
  },
  
];

// Helper function to flatten routes for pagination
function flattenRoutes(routes: EachRoute[]): EachRoute[] {
  return routes.reduce((acc: EachRoute[], route) => {
    if (!route.noLink) {
      acc.push(route);
    }
    if (route.items) {
      acc.push(...flattenRoutes(route.items));
    }
    return acc;
  }, []);
}

// Export flattened routes for pagination
export const page_routes = flattenRoutes(ROUTES);
