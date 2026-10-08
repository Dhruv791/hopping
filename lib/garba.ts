export interface DancerConfig {
  id: number;
  initialAngle: number; // in degrees
  color: string;
  name: string;
}

export interface MoodCardData {
  id: string;
  gradient: string;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  cardType: "garba" | "dandiya" | "learn" | "squad";
}

export interface NightColor {
  night: number;
  colorName: string;
  hex: string;
}

// 9 Skirt colours by angle / index:
// 0 deg marigold #F5B324, 40 violet #8B5CF6, 80 red #E5484D, 120 pink #EC4899,
// 160 green #32D74B, 200 orange #FF7A1A, 240 cyan #06B6D4, 280 red #E5484D, 320 magenta #D946EF
export const DANCER_CONFIGS: DancerConfig[] = [
  { id: 0, initialAngle: 0, color: "#F5B324", name: "Marigold" },
  { id: 1, initialAngle: 40, color: "#8B5CF6", name: "Violet" },
  { id: 2, initialAngle: 80, color: "#E5484D", name: "Red" },
  { id: 3, initialAngle: 120, color: "#EC4899", name: "Pink" },
  { id: 4, initialAngle: 160, color: "#32D74B", name: "Green" },
  { id: 5, initialAngle: 200, color: "#FF7A1A", name: "Orange" },
  { id: 6, initialAngle: 240, color: "#06B6D4", name: "Cyan" },
  { id: 7, initialAngle: 280, color: "#E5484D", name: "Red" },
  { id: 8, initialAngle: 320, color: "#D946EF", name: "Magenta" },
];

// Nine nights dots in order: red, marigold, magenta, cyan, orange, green, violet, white, pink
export const NINE_NIGHTS_COLORS: NightColor[] = [
  { night: 1, colorName: "Red", hex: "#E5484D" },
  { night: 2, colorName: "Royal Marigold", hex: "#F5B324" },
  { night: 3, colorName: "Magenta", hex: "#D946EF" },
  { night: 4, colorName: "Peacock Cyan", hex: "#06B6D4" },
  { night: 5, colorName: "Vibrant Orange", hex: "#FF7A1A" },
  { night: 6, colorName: "Emerald Green", hex: "#32D74B" },
  { night: 7, colorName: "Mystic Violet", hex: "#8B5CF6" },
  { night: 8, colorName: "Pure White", hex: "#FFFFFF" },
  { night: 9, colorName: "Festive Pink", hex: "#EC4899" },
];

// Toran flag colors cycling
export const TORAN_COLORS = [
  "#E5484D", // Red
  "#F5B324", // Marigold
  "#D946EF", // Magenta
  "#06B6D4", // Cyan
  "#FF7A1A", // Orange
  "#E5484D",
  "#F5B324",
  "#D946EF",
  "#06B6D4",
  "#FF7A1A",
  "#E5484D",
  "#F5B324",
  "#D946EF",
  "#06B6D4",
];

// 4 Decorative Hero Mood Cards (Purely aesthetic, non-interactive, no false info)
export const HERO_MOOD_CARDS: MoodCardData[] = [
  {
    id: "mood-garba",
    gradient: "linear-gradient(135deg, #D946EF 0%, #7E22CE 100%)",
    badge: "GARBA",
    titleLine1: "Find your",
    titleLine2: "garba partner",
    tagline: "NAVRATRI VIBES",
    cardType: "garba",
  },
  {
    id: "mood-dandiya",
    gradient: "linear-gradient(135deg, #F97316 0%, #DC2626 100%)",
    badge: "DANDIYA",
    titleLine1: "Dandiya",
    titleLine2: "nights",
    tagline: "TAP · SPIN · REPEAT",
    cardType: "dandiya",
  },
  {
    id: "mood-learn",
    gradient: "linear-gradient(135deg, #FBBF24 0%, #EA580C 100%)",
    badge: "FIRST TIME?",
    titleLine1: "Learn garba",
    titleLine2: "together",
    tagline: "STEP BY STEP",
    cardType: "learn",
  },
  {
    id: "mood-squad",
    gradient: "linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)",
    badge: "SQUAD",
    titleLine1: "Build your",
    titleLine2: "garba squad",
    tagline: "DANCE TOGETHER",
    cardType: "squad",
  },
];

export const APP_URL = "https://hoppingapp.vercel.app";
