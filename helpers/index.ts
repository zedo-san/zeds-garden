export const removeSquareBrackets = (inputString: string) => {
  // Use regular expression to remove square brackets
  return inputString.replace(/[\[\]"]/g, "");
};
