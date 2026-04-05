/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tertiary: "#00362b",
        "surface-bright": "#f9f9ff",
        "inverse-primary": "#a1d1bd",
        surface: "#f9f9ff",
        "tertiary-fixed": "#aef0da",
        "on-secondary-fixed": "#261a00",
        "on-error-container": "#93000a",
        "on-surface": "#141b2b",
        "inverse-on-surface": "#edf0ff",
        "on-tertiary-fixed-variant": "#055141",
        "on-secondary-container": "#715300",
        "secondary-fixed": "#ffdfa0",
        "surface-container-highest": "#dce2f7",
        "tertiary-fixed-dim": "#93d3bf",
        outline: "#717974",
        "inverse-surface": "#293040",
        "surface-dim": "#d3daef",
        "on-tertiary": "#ffffff",
        "surface-container": "#e9edff",
        "secondary-fixed-dim": "#f6be39",
        "on-primary-container": "#8dbda9",
        "surface-container-high": "#e1e8fd",
        "on-error": "#ffffff",
        "secondary-container": "#ffc641",
        "surface-container-lowest": "#ffffff",
        "on-secondary": "#ffffff",
        "primary-fixed-dim": "#a1d1bd",
        "surface-container-low": "#f1f3ff",
        "on-tertiary-container": "#80bfab",
        "on-secondary-fixed-variant": "#5c4300",
        "outline-variant": "#c0c8c3",
        "primary-fixed": "#bcedd8",
        "surface-tint": "#3a6757",
        "tertiary-container": "#024f40",
        background: "#f9f9ff",
        primary: "#023628",
        error: "#ba1a1a",
        "primary-container": "#1f4d3e",
        "on-primary": "#ffffff",
        "on-tertiary-fixed": "#002019",
        "error-container": "#ffdad6",
        "on-background": "#141b2b",
        "surface-variant": "#dce2f7",
        "on-surface-variant": "#414945",
        "on-primary-fixed": "#002117",
        secondary: "#795900",
        "on-primary-fixed-variant": "#214f40"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      fontFamily: {
        headline: ["Poppins", "Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      },
      scale: {
        102: "1.02"
      }
    }
  },
  plugins: []
};

