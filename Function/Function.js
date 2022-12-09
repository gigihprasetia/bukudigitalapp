export const getStringLimit = (string, leng) => {
  if (string.length >= leng) {
    return string.slice(0, leng) + '...';
  } else {
    return string;
  }
};
