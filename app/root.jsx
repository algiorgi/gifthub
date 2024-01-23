import {
    LiveReload,
    Outlet,
  } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
      </head>
      <body>
        <h1>Hello World</h1>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
