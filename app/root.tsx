import type { LinksFunction } from "@vercel/remix";

import {
  Links,
  LiveReload,
  Outlet,
} from "@remix-run/react";

import styles from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "icon", href: "data:image/x-icon;base64,AA"},
];

export default function App() {
  return (
    <html>
      <head>
        <Links/>
      </head>
      <body>
        <h1 className="text-6xl font-bold text-red-700">Hello World</h1>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
