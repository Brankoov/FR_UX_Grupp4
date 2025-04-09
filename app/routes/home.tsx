import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sandys Foodtruck - Catering & Event" },
    { name: "description", content: "Boka vår foodtruck för event och catering." },
    { name: "keywords", content: "foodtruck, catering, event, mat, street food" },
  ];
}

export default function Home() {
  return <Welcome />;
}

