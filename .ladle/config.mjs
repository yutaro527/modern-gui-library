export default {
  stories: "src/**/*.stories.{js,jsx,ts,tsx}",
  outDir: "build",
  base: "/modern-gui-library/", // GitHub Pagesのベースパス
  viteConfig: ".ladle/vite.config.ts",
  appendToHead: "",
  addons: {
    control: {
      enabled: true,
      defaultState: {},
    },
    theme: {
      enabled: true,
      defaultState: "light",
    },
    rtl: {
      enabled: false,
      defaultState: false,
    },
    ladle: {
      enabled: true,
    },
  },
};