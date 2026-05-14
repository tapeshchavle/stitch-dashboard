/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
              "surface-dim": "#13131b",
              "secondary": "#ecffe3",
              "on-surface": "#e4e1ed",
              "on-secondary-fixed-variant": "#00530e",
              "surface-container": "#1f1f27",
              "on-primary": "#1000a9",
              "on-background": "#e4e1ed",
              "inverse-surface": "#e4e1ed",
              "tertiary": "#2fd9f4",
              "on-error-container": "#ffdad6",
              "primary-fixed": "#e1e0ff",
              "surface-variant": "#34343d",
              "surface-bright": "#393841",
              "surface-container-high": "#292932",
              "surface-tint": "#c0c1ff",
              "on-primary-fixed-variant": "#2f2ebe",
              "surface-container-lowest": "#0d0d15",
              "primary-fixed-dim": "#c0c1ff",
              "error": "#ffb4ab",
              "on-tertiary": "#00363e",
              "on-tertiary-container": "#000608",
              "inverse-primary": "#494bd6",
              "primary": "#c0c1ff",
              "surface": "#13131b",
              "on-surface-variant": "#c7c4d7",
              "surface-container-highest": "#34343d",
              "error-container": "#93000a",
              "inverse-on-surface": "#303038",
              "on-primary-fixed": "#07006c",
              "on-tertiary-fixed-variant": "#004e5a",
              "on-secondary": "#003907",
              "surface-container-low": "#1b1b23",
              "on-primary-container": "#0d0096",
              "on-tertiary-fixed": "#001f25",
              "secondary-fixed": "#72ff70",
              "on-secondary-fixed": "#002203",
              "primary-container": "#8083ff",
              "tertiary-fixed": "#a2eeff",
              "on-secondary-container": "#007117",
              "tertiary-fixed-dim": "#2fd9f4",
              "tertiary-container": "#008395",
              "background": "#13131b",
              "outline-variant": "#464554",
              "on-error": "#690005",
              "secondary-fixed-dim": "#00e639",
              "secondary-container": "#13ff43",
              "outline": "#908fa0"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "gutter": "24px",
              "xs": "4px",
              "xl": "40px",
              "sm": "8px",
              "xxl": "80px",
              "md": "16px",
              "container-max": "1440px",
              "lg": "24px",
              "unit": "4px"
      },
      "fontFamily": {
              "label-md": ["Geist"],
              "display-lg": ["Geist"],
              "headline-lg": ["Geist"],
              "body-md": ["Geist"],
              "body-lg": ["Geist"],
              "headline-xl": ["Geist"],
              "label-sm": ["Geist"]
      },
      "fontSize": {
              "label-md": ["14px", { "lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "500" }],
              "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700" }],
              "headline-lg": ["32px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600" }],
              "body-md": ["16px", { "lineHeight": "1.6", "letterSpacing": "0em", "fontWeight": "400" }],
              "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "0em", "fontWeight": "400" }],
              "headline-xl": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600" }],
              "label-sm": ["12px", { "lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "600" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}

