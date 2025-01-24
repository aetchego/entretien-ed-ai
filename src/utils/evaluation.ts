export type ObjectWithNumber<T> = T & {
  number: string;
};

export const groupByFirstNumber = <T>(
  data: ObjectWithNumber<T>[],
  separator: string
): { [key: string]: ObjectWithNumber<T>[] } => {
  const result: { [key: string]: ObjectWithNumber<T>[] } = {};
  data.forEach((item) => {
    const firstNumber = item.number.split(separator)[0];
    if (!result[firstNumber]) result[firstNumber] = [];
    result[firstNumber].push(item);
  });
  return result;
};
