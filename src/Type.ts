export interface PasswordConfig {
  long: number;
  activeNumber: boolean;
  activeSymbols: boolean;
  activeCapital: boolean;
  activeLower: boolean;
}
export type Action = {
  type: string;
  value: string;
};

export enum ActionTypes {
  UPDATE = "UPDATE",
}
export enum Feature {
  "number",
  "symbol",
  "lower",
  "capital",
}
export const Letters: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const Symbols: string[] = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "/",
  ".",
  "\\",
  ":",
  "<",
  ">",
  "?",
  "[",
  "]",
  "{",
  "}",
  ",",
];
