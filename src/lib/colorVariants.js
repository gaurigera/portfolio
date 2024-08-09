export const ColorVariants = {
  blue: {
    light: {
      gradient: `bg-gradient-to-t from-blue-50 via-transparent `,
      text: `text-blue-500`,
    },
    dark: {
      gradient: `bg-gradient-to-t from-blue-400/40 via-transparent `,
      text: `text-blue-500`,
    },
    select: `selection:text-blue-800 dark:selection:text-blue-300`, 
    bg: `bg-gradient-to-tl from-blue-100/60 dark:from-blue-700/35`,
  },
  pink: {
    light: {
      gradient: `bg-gradient-to-t from-pink-50 via-transparent `,
      text: `text-pink-600`,
    },
    dark: {
      gradient: `bg-gradient-to-t from-pink-400/70 via-transparent`,
      text: `text-pink-400`,
    },
    select: `selection:text-pink-800 dark:selection:text-pink-300`,
    bg: `bg-gradient-to-tl from-pink-500/20`,
  },
  orange: {
    light: {
      gradient: `bg-gradient-to-t from-orange-50 via-transparent`,
      text: `text-orange-500`,
    },
    dark: {
      gradient: `bg-gradient-to-t from-orange-400/20 via-transparent `,
      text: `text-orange-600`,
    },
    select: `selection:text-orange-800 dark:selection:text-orange-300`,
    bg: `bg-gradient-to-tl from-orange-500/25`,
  },
  green: {
    light: {
      gradient: `bg-gradient-to-t from-green-50 via-transparent selection:text-green-800`,
      text: `text-green-500`,
    },
    dark: {
      gradient: `bg-gradient-to-t from-green-600/45 via-transparent selection:text-green-300`,
      text: `text-green-500`,
    },
    bg: `bg-gradient-to-tl from-green-50/20`,
  },
  purple: {
    light: {
      gradient: `bg-gradient-to-t from-purple-50 via-transparent `,
      text: `text-purple-500`,
    },
    dark: {
      gradient: `bg-gradient-to-t from-purple-600/45 via-transparent `,
      text: `text-purple-500`,
    },
    select: `selection:text-purple-800 dark:selection:text-purple-300`,
    bg: `bg-gradient-to-tl from-purple-50 dark:from-purple-500/40`,
  },
};
