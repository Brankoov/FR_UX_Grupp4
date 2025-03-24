import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Er startsida
  route("kontakt", "routes/kontakt.tsx"), // Kontakt-sidan
  route("meny", "routes/meny.tsx") // Meny-sidan (fixad)
] satisfies RouteConfig;
