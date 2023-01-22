const commonDivisor = 2;

export const getRandomInt = (min: number, max: number): number => {
  const resultMin = Math.ceil(min);
  const resultMax = Math.floor(max);

  return Math.floor(Math.random() * (resultMax - resultMin) + resultMin);
};
export const isEvenNumber = (num: number): boolean => num % commonDivisor === 0;

export const randValue = (arr: string[]): number =>
  Math.floor(Math.random() * arr.length);
