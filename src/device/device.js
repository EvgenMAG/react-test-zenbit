// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px

const size = {
  mobileL: '425px',
  desktop: '1440px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileL})`,
  desktop: `(min-width: ${size.desktop})`,
};
