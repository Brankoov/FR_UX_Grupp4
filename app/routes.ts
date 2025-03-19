import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Er startsida
  route("kontakt", "routes/kontakt.tsx"), // Lägg till denna rad
] satisfies RouteConfig;
