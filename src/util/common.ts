export const truncate = (str: string, length: number) => {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
};

export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
