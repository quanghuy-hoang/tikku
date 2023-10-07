import type { Config } from "tailwindcss";
import { shadcnPreset } from "./lib/shadcn/shadcn-preset";

const config = {
  presets: [shadcnPreset],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
} satisfies Config;

export default config;
