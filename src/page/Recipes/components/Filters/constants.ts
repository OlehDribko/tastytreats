import { Areas, Ingredients, type Option, Time } from "../../../../types/types";

export const optionsTime: Option<Time>[] = Object.entries(Time)
  .filter(([key]) => Number.isNaN(Number(key)))
  .map(([label, value]) => ({
    label: label.replace(/_/g, " ").toLowerCase(),
    value: value as Time,
  }));

export const optionsArea: Option<Areas>[] = Object.entries(Areas)
  .filter(([key]) => Number.isNaN(Number(key)))
  .map(([label, value]) => ({
    label: label.replace(/_/g, " ").toLowerCase(),
    value: value as Areas,
  }));

export const optionsIngredients: Option<Ingredients>[] = Object.entries(
  Ingredients
)
  .filter(([key]) => Number.isNaN(Number(key)))
  .map(([label, value]) => ({
    label: label.replace(/_/g, " ").toLowerCase(),
    value: value as Ingredients,
  }));
