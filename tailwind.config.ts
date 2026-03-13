import type { Config } from "tailwindcss";

// Tailwind v4 uses CSS @theme for configuration.
// This file is kept minimal to avoid v3/v4 conflicts.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
