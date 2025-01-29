import { OverallStatusLabel } from "../types";

export type ObjectWithNumber<T> = T & {
  number: string;
};

export const groupByFirstKey = <T>(
  data: T[],
  key: keyof T,
  separator: string
): { [key: string]: T[] } => {
  const result: { [key: string]: T[] } = {};
  data.forEach((item) => {
    const firstNumber = (item[key] as string).split(separator)[0];
    if (!result[firstNumber]) result[firstNumber] = [];
    result[firstNumber].push(item);
  });
  return result;
};

export const getGradeRange = (grade: string) => {
  const toNumber = +grade;
  if (isNaN(toNumber)) return OverallStatusLabel.UNKNOWN;
  if (toNumber < 6) return OverallStatusLabel.VERY_WEAK;
  if (toNumber < 10) return OverallStatusLabel.WEAK;
  if (toNumber < 14) return OverallStatusLabel.AVERAGE;
  if (toNumber < 17) return OverallStatusLabel.GOOD;
  if (toNumber < 21) return OverallStatusLabel.VERY_GOOD;
};
