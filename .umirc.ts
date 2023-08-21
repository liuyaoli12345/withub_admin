import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index"},
    { path: "/login", component: "login"},
  ],
  npmClient: 'pnpm',
});
