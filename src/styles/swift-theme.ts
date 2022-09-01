/**
 * SWIFT - A Rebel Design System
 * https://www.figma.com/file/eZqe4Wi9xLzhMC64i8QDKY/Reb-sys?node-id=2371%3A60316
 * Design System - Tope Lona
 */

const success = {
  50: '#F0FDF4',
  100: '#DCFCE7',
  200: '#BBF7D0',
  300: '#86EFAC',
  400: '#4ADE80',
  500: '#22C55E',
  600: '#16A34A',
  700: '#15803D',
  800: '#166534',
  900: '#14532D',
}

const warning = {
  50: '#FFFBEB',
  100: '#FEF3C7',
  200: '#FDE68A',
  300: '#FCD34D',
  400: '#FBBF24',
  500: '#F59E0B',
  600: '#D97706',
  700: '#B45309',
  800: '#92400E',
  900: '#78350F',
}

const destructive = {
  50: '#FEF2F2',
  100: '#FEE2E2',
  200: '#FECACA',
  300: '#FCA5A5',
  400: '#F87171',
  500: '#EF4444',
  600: '#DC2626',
  700: '#B91C1C',
  800: '#991B1B',
  900: '#7F1D1D',
}

const primary = {
  50: '#F7F6F9',
  100: '#E6E4EE',
  200: '#CDC9DD',
  300: '#B4AFCD',
  400: '#9B94BC',
  500: '#453E63',
  600: '#3F395B',
  700: '#37314E',
  800: '#2E2942',
  900: '#201C2D',
}

const neutral = {
  50: '#F9FAFB',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827',
}

const secondary = {
  50: '#FFE6EE',
  100: '#FFABCA',
  200: '#FF82B4',
  300: '#F7579C',
  400: '#EB2D85',
  500: '#DF0772',
  600: '#B80062',
  700: '#910052',
  800: '#6B0040',
  900: '#45002C',
}

const supporting = {
  aqua: '#0BFFE6',
  grapefruit: '#FE546F',
  sunflower: '#FFD080',
  strongCyan: '#36BFC6',
  orangePeel: '#FF9D00',
  haciendaBlue: '#00819E',
}

const shades = {
  white: '#FFFFFF',
  black: '#000000',
}

const swiftColors = {
  primary,
  secondary,
  neutral,
  success,
  destructive,
  supporting,
  warning,
  shades,
}

export const swiftTheme = {
  colors: {
    ...swiftColors,
  },
}
