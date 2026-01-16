// src/utils/breadcrumbs.ts
import { routesMeta } from "@/routes.meta";

export type BreadcrumbItem = {
  label: string;
  href: string;
  isLast: boolean;
};

export function resolveBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);

  let path = "";

  return segments.map((segment, index) => {
    path += `/${segment}`;

    return {
      label: routesMeta[path] ?? segment.replace(/-/g, " "),
      href: path,
      isLast: index === segments.length - 1,
    };
  });
}