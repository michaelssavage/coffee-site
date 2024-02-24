export const randomID = (length = 12) => {
  return (Math.random() * 10 ** length).toFixed();
};
