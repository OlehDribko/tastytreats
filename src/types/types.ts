export type Option<T> = {
  label: string;
  value: T;
};

export enum Areas {
  ITALIAN = 1,
  MEXICAN = 2,
  JAPANESE = 3,
  INDIAN = 4,
  FRENCH = 5,
  SPANISH = 6,
  THAI = 7,
  CHINESE = 8,
  KOREAN = 9,
  VIETNAMESE = 10,
  OTHER = 11,
}

export enum Time {
  "10_MIN" = 10,
  "20_MIN" = 20,
  "30_MIN" = 30,
  "40_MIN" = 40,
}

export enum Ingredients {
  CHICKEN = 1,
  BEEF = 2,
  PORK = 3,
  FISH = 4,
  VEGETARIAN = 5,
  VEGAN = 6,
  GLUTEN_FREE = 7,
  DAIRY_FREE = 8,
  PALEO = 9,
  KETO = 10,
}

export enum CategoryItems {
  BEAF = 1,
  CHICKEN = 2,
  PORK = 3,
  FISH = 4,
  VEGETARIAN = 5,
  VEGAN = 6,
  GLUTEN_FREE = 7,
  DAIRY_FREE = 8,
  PALEO = 9,
  KETO = 10,
}
