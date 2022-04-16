export const isEmpty = (string: string) => {
  return string.trim().length === 0;
};

export const CheckRegexPattern = (value: string, regex: RegExp) => {
  return regex.test(value);
};
