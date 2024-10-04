export enum Color {
  red,
  black,
  blue,
  gree,
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
