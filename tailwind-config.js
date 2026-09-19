/**
 * tailwind-config.js
 * Shared Tailwind CSS configuration for all pages — Harry Kusumo
 * Color Palette: Primary #0094DA | Secondary #41B6E6 | Dark Navy #123047 | Neutral #5B7284
 */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* ─── CLEAN SYSTEM (index.html standard) ─── */
        "primary":          "#0094DA",
        "primary-dark":     "#007bb6",
        "primary-light":    "#33AADF",
        "secondary":        "#41B6E6",
        "secondary-dark":   "#2D9CC9",
        "dark-navy":        "#123047",
        "slate-body":       "#5B7284",
        "bg-light-alt":     "#F4FAFD",
        "bg-ice":           "#EAF6FC",
        "border-clean":     "#D9EAF3",
        "border-subtle":    "#E5EEF5",
        "surface-dim":      "#F5F7F9",

        /* ─── MATERIAL DESIGN BRIDGE ─── */
        /* Maps old Material tokens → new AVer brand palette  */
        /* Backgrounds & Surfaces */
        "background":                 "#F4FAFD",
        "surface":                    "#F4FAFD",
        "surface-bright":             "#F4FAFD",
        "surface-variant":            "#D9EAF3",
        "surface-tint":               "#0094DA",
        "surface-container-lowest":   "#FFFFFF",
        "surface-container-low":      "#EAF6FC",
        "surface-container":          "#E0F2FC",
        "surface-container-high":     "#D9EAF3",
        "surface-container-highest":  "#C5DFF0",

        /* Primary scale */
        "on-primary":                 "#FFFFFF",
        "primary-container":          "#007bb6",
        "on-primary-container":       "#FFFFFF",
        "primary-fixed":              "#EAF6FC",
        "primary-fixed-dim":          "#41B6E6",
        "on-primary-fixed":           "#123047",
        "on-primary-fixed-variant":   "#007bb6",

        /* Secondary scale */
        "on-secondary":               "#FFFFFF",
        "secondary-container":        "#41B6E6",
        "on-secondary-container":     "#123047",
        "secondary-fixed":            "#EAF6FC",
        "secondary-fixed-dim":        "#41B6E6",
        "on-secondary-fixed":         "#123047",
        "on-secondary-fixed-variant": "#007bb6",

        /* Tertiary scale (mapped to dark navy) */
        "tertiary":                   "#5B7284",
        "on-tertiary":                "#FFFFFF",
        "tertiary-container":         "#5B7284",
        "on-tertiary-container":      "#FFFFFF",
        "tertiary-fixed":             "#EAF6FC",
        "tertiary-fixed-dim":         "#D9EAF3",
        "on-tertiary-fixed":          "#123047",
        "on-tertiary-fixed-variant":  "#5B7284",

        /* Text / On-surface */
        "on-background":              "#123047",
        "on-surface":                 "#123047",
        "on-surface-variant":         "#5B7284",

        /* Inverse */
        "inverse-surface":            "#123047",
        "inverse-primary":            "#41B6E6",
        "inverse-on-surface":         "#EAF6FC",

        /* Outline */
        "outline":                    "#5B7284",
        "outline-variant":            "#D9EAF3",

        /* Error (unchanged) */
        "error":                      "#ba1a1a",
        "on-error":                   "#FFFFFF",
        "error-container":            "#ffdad6",
        "on-error-container":         "#93000a",
      },

      fontFamily: {
        /* Clean system */
        "headline": ["Plus Jakarta Sans", "sans-serif"],
        "body":     ["Plus Jakarta Sans", "sans-serif"],
        "code":     ["JetBrains Mono", "monospace"],

        /* Material pages — all map to Plus Jakarta Sans */
        "label-md":           ["Plus Jakarta Sans"],
        "display-hero":       ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "caption":            ["Plus Jakarta Sans"],
        "body-md":            ["Plus Jakarta Sans"],
        "headline-lg":        ["Plus Jakarta Sans"],
        "body-sm":            ["Plus Jakarta Sans"],
        "headline-sm":        ["Plus Jakarta Sans"],
        "body-lg":            ["Plus Jakarta Sans"],
        "label-technical":    ["Plus Jakarta Sans"],
        "display-hero-mobile":["Plus Jakarta Sans"],
        "headline-md":        ["Plus Jakarta Sans"],
      },

      fontSize: {
        /* Material Design scale */
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "display-hero": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "800" }],
        "headline-lg-mobile": ["30px", { lineHeight: "38px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "caption": ["12px", { lineHeight: "18px", letterSpacing: "0.01em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "26px", letterSpacing: "0em", fontWeight: "400" }],
        "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.025em", fontWeight: "700" }],
        "body-sm": ["14px", { lineHeight: "22px", letterSpacing: "0.005em", fontWeight: "400" }],
        "headline-sm": ["22px", { lineHeight: "30px", letterSpacing: "-0.015em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "400" }],
        "label-technical": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "700" }],
        "display-hero-mobile": ["38px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-md": ["28px", { lineHeight: "36px", letterSpacing: "-0.02em", fontWeight: "700" }],
      },

      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px",
      },

      spacing: {
        /* Material spacing tokens */
        "space-xs":   "0.25rem",
        "space-sm":   "0.5rem",
        "space-md":   "1rem",
        "space-lg":   "1.5rem",
        "space-xl":   "2.5rem",
        "gutter":     "1.5rem",
        "gutter-lg":  "2rem",
        "margin":     "1.5rem",
        "margin-md":  "3rem",
        "margin-lg":  "5rem",
      },
    }
  }
};
