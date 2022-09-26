enum RegularColors {
  BLACK = '#000',
  WHITE = '#fff',
  MAROON = '#830059',
  PURPLE = '#2C2263',
  PURPLE_DARK = '#3E354F',
  PURPLE_BRIGHT = '#A772FF',
  PURPLE_LIGHT_TEXT = '#CCADFF',
}

enum Gradients {
  PRIMARY_GRADIENT = 'linear-gradient(90deg, #259DFE -0.86%, #8C49FB 102.01%)',
  SUCCESS_GRADIENT = 'linear-gradient(to right, #58d956, #33ad27)',
  ERROR_GRADIENT = 'linear-gradient(to right, #e94444, #dd0000)',
}

enum OtherColors {
  DISABLED = '#626262',
  ERROR = '#dd4545',
  BACKGROUND_MAIN = '#252541',
}

export const Colors = { ...RegularColors, ...Gradients, ...OtherColors };
export type Colors = typeof Colors;