export const secondsToDateString = (seconds) => {
  const date = new Date(seconds * 1000);
  return date.toDateString();
};

export const removeHTMLTagFromString = (string) => {
  return string.replace(/(<([^>]+)>)/gi, "");
};
