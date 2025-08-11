export const baseTokens = {
  spacing: {
    0: '0px',
    xs: '4px', // space.1
    sm: '8px', // space.2
    md: '16px', // space.4
    lg: '24px', // space.6
    xl: '32px', // space.8
    '2xl': '40px', // space.10
    '3xl': '48px', // space.12
    '4xl': '64px', // space.16
  },
  radii: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    round: '50%',
  },
  typography: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    sizes: {
      display: '2rem', // 32px — page titles / hero
      headline: '1.5rem', // 24px — section headings
      subtitle: '1.25rem', // 20px — subheadings
      body: '1rem', // 16px — main body text
      caption: '0.875rem', // 14px — secondary text
      label: '0.75rem', // 12px — metadata, tags
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      display: 1.25, // 40px on 32px font
      headline: 1.33, // 32px on 24px font
      subtitle: 1.4, // 28px on 20px font
      body: 1.5, // 24px on 16px font
      caption: 1.43, // 20px on 14px font
      label: 1.33, // 16px on 12px font
    },
  },
  breakpoints: {
    xs: '0px', // mobile portrait
    sm: '480px', // mobile landscape / small tablets
    md: '768px', // tablets
    lg: '1024px', // small laptops
    xl: '1440px', // desktops
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.25)',
    md: '0 4px 8px rgba(0,0,0,0.3)',
    lg: '0 8px 16px rgba(0,0,0,0.35)',
    xl: '0 12px 24px rgba(0,0,0,0.4)',
  },
};
