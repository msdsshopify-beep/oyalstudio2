// NOVA Brand Design System Theme Configuration
export const theme = {
  // Brand Identity
  brand: {
    name: "NOVA",
    tagline: "Elevate Your Style",
  },

  // Color Palette
  colors: {
    // Light Mode Colors
    light: {
      // Base Colors
      background: "0 0% 100%",           // Pure white
      foreground: "240 10% 3.9%",       // Almost black
      
      // Primary Brand Colors
      primary: "240 5.9% 10%",          // Dark charcoal
      primaryForeground: "0 0% 98%",    // Off white
      
      // Secondary Colors
      secondary: "240 4.8% 95.9%",      // Light gray
      secondaryForeground: "240 5.9% 10%", // Dark charcoal
      
      // Muted Colors
      muted: "240 4.8% 95.9%",          // Light gray
      mutedForeground: "240 3.8% 46.1%", // Medium gray
      
      // Accent Colors
      accent: "240 4.8% 95.9%",         // Light gray
      accentForeground: "240 5.9% 10%", // Dark charcoal
      
      // Brand Accent (Gold)
      brandAccent: "45 100% 50%",       // Gold
      
      // Status Colors
      destructive: "0 84.2% 60.2%",     // Red
      destructiveForeground: "0 0% 98%", // White
      success: "142 76% 36%",           // Green
      successForeground: "0 0% 98%",    // White
      
      // UI Elements
      border: "240 5.9% 90%",           // Light border
      input: "240 5.9% 90%",            // Input background
      ring: "240 5.9% 10%",             // Focus ring
      card: "0 0% 100%",                // Card background
      cardForeground: "240 10% 3.9%",   // Card text
      popover: "0 0% 100%",             // Popover background
      popoverForeground: "240 10% 3.9%", // Popover text
    },

    // Dark Mode Colors
    dark: {
      // Base Colors
      background: "240 10% 3.9%",       // Dark background
      foreground: "0 0% 98%",           // Light text
      
      // Primary Brand Colors
      primary: "0 0% 98%",              // Light for dark mode
      primaryForeground: "240 5.9% 10%", // Dark text on light
      
      // Secondary Colors
      secondary: "240 3.7% 15.9%",      // Dark gray
      secondaryForeground: "0 0% 98%",  // Light text
      
      // Muted Colors
      muted: "240 3.7% 15.9%",          // Dark gray
      mutedForeground: "240 5% 64.9%",  // Medium light gray
      
      // Accent Colors
      accent: "240 3.7% 15.9%",         // Dark gray
      accentForeground: "0 0% 98%",     // Light text
      
      // Brand Accent (Gold)
      brandAccent: "45 100% 60%",       // Brighter gold for dark mode
      
      // Status Colors
      destructive: "0 62.8% 30.6%",     // Darker red
      destructiveForeground: "0 0% 98%", // White
      success: "142 76% 36%",           // Green
      successForeground: "0 0% 98%",    // White
      
      // UI Elements
      border: "240 3.7% 15.9%",         // Dark border
      input: "240 3.7% 15.9%",          // Dark input
      ring: "240 4.9% 83.9%",           // Light focus ring
      card: "240 10% 3.9%",             // Dark card
      cardForeground: "0 0% 98%",       // Light card text
      popover: "240 10% 3.9%",          // Dark popover
      popoverForeground: "0 0% 98%",    // Light popover text
    },
  },

  // Typography
  typography: {
    // Font Families
    fonts: {
      brand: ["Bebas Neue", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    
    // Font Sizes
    sizes: {
      xs: "0.75rem",      // 12px
      sm: "0.875rem",     // 14px
      base: "1rem",       // 16px
      lg: "1.125rem",     // 18px
      xl: "1.25rem",      // 20px
      "2xl": "1.5rem",    // 24px
      "3xl": "1.875rem",  // 30px
      "4xl": "2.25rem",   // 36px
      "5xl": "3rem",      // 48px
      "6xl": "3.75rem",   // 60px
      "7xl": "4.5rem",    // 72px
    },
    
    // Font Weights
    weights: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    
    // Line Heights
    lineHeights: {
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
  },

  // Spacing Scale
  spacing: {
    0: "0px",
    1: "0.25rem",    // 4px
    2: "0.5rem",     // 8px
    3: "0.75rem",    // 12px
    4: "1rem",       // 16px
    5: "1.25rem",    // 20px
    6: "1.5rem",     // 24px
    8: "2rem",       // 32px
    10: "2.5rem",    // 40px
    12: "3rem",      // 48px
    16: "4rem",      // 64px
    20: "5rem",      // 80px
    24: "6rem",      // 96px
    32: "8rem",      // 128px
    40: "10rem",     // 160px
    48: "12rem",     // 192px
    56: "14rem",     // 224px
    64: "16rem",     // 256px
  },

  // Border Radius
  borderRadius: {
    none: "0px",
    sm: "0.125rem",   // 2px
    default: "0.25rem", // 4px
    md: "0.375rem",   // 6px
    lg: "0.5rem",     // 8px
    xl: "0.75rem",    // 12px
    "2xl": "1rem",    // 16px
    "3xl": "1.5rem",  // 24px
    full: "9999px",
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    default: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "none",
    
    // Custom Shadows
    product: "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
    hover: "0 20px 40px -15px rgba(0, 0, 0, 0.3)",
    glow: "0 0 40px rgba(255, 215, 0, 0.4)", // Gold glow
  },

  // Gradients
  gradients: {
    hero: "linear-gradient(135deg, hsl(240, 10%, 3.9%) 0%, hsl(240, 5.9%, 10%) 100%)",
    button: "linear-gradient(135deg, hsl(45, 100%, 50%) 0%, hsl(45, 100%, 60%) 100%)",
    overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%)",
  },

  // Animations & Transitions
  animations: {
    // Transition Durations
    durations: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
    },
    
    // Easing Functions
    easings: {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    
    // Custom Animations
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      slideUp: {
        "0%": { transform: "translateY(20px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      scaleIn: {
        "0%": { transform: "scale(0.95)", opacity: "0" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
    },
  },

  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Z-Index Scale
  zIndex: {
    hide: "-1",
    auto: "auto",
    base: "0",
    docked: "10",
    dropdown: "1000",
    sticky: "1100",
    banner: "1200",
    overlay: "1300",
    modal: "1400",
    popover: "1500",
    skipLink: "1600",
    toast: "1700",
    tooltip: "1800",
  },

  // Component Variants
  components: {
    button: {
      sizes: {
        sm: "px-3 py-1.5 text-sm",
        default: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-xl",
      },
      variants: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
        accent: "bg-brand-accent text-foreground hover:bg-brand-accent/90",
      },
    },
    
    card: {
      variants: {
        default: "border bg-card text-card-foreground shadow-sm",
        elevated: "border bg-card text-card-foreground shadow-md",
        product: "border bg-card text-card-foreground shadow-product hover:shadow-hover transition-shadow",
      },
    },
  },

  // Layout
  layout: {
    container: {
      center: true,
      padding: "2rem",
      maxWidth: "1400px",
    },
    
    section: {
      padding: "py-16 md:py-24",
    },
  },
} as const;

// Type exports for TypeScript
export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ThemeTypography = typeof theme.typography;
export type ThemeSpacing = typeof theme.spacing;

// Utility functions
export const getColor = (colorPath: string, mode: 'light' | 'dark' = 'light') => {
  const path = colorPath.split('.');
  let value: any = theme.colors[mode];
  
  for (const key of path) {
    value = value?.[key];
  }
  
  return value ? `hsl(${value})` : undefined;
};

export const getFont = (fontName: keyof typeof theme.typography.fonts) => {
  return theme.typography.fonts[fontName].join(', ');
};

export const getSpacing = (space: keyof typeof theme.spacing) => {
  return theme.spacing[space];
};

export const getShadow = (shadowName: keyof typeof theme.shadows) => {
  return theme.shadows[shadowName];
};

export const getGradient = (gradientName: keyof typeof theme.gradients) => {
  return theme.gradients[gradientName];
};

// CSS Custom Properties Generator
export const generateCSSVariables = (mode: 'light' | 'dark') => {
  const colors = theme.colors[mode];
  const cssVars: Record<string, string> = {};
  
  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      cssVars[`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`] = value;
    }
  });
  
  return cssVars;
};

export default theme;