import type { Config } from "tailwindcss";
import { shadcnPreset } from "./src/lib/shadcn/shadcn-preset";

const config = {
  presets: [shadcnPreset],
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/layout/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
} satisfies Config;

export default config;
