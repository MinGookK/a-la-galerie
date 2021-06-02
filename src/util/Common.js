const availableKeywords = [
  "contemporary art",
  "modern art",
  "art nouveau",
  "pop art",
  "dog",
  "cat",
];

export const makeRandomQueryKeyword = () => {
  let rand = Math.ceil(Math.random() * availableKeywords.length - 1);
  if (rand === -1) {
    rand = 0;
  }

  return availableKeywords[rand];
};

export const randRange = (min, max) =>
  Math.ceil(Math.random() * (max - min) + min);
