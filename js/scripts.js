const words = [
  "wow",
  "amazing",
  "impressive",
  "terrible",
  "horrendous",
  "awful",
  "mid",
  "ok",
  "decent",
];

const pickWord = (arr) => {
  let r = Math.floor(Math.random() * arr.length);
  let item = arr[r];
  return item;
};

// make funciton to change the html of the document
const changeDisplay = () => {
  let chooseWord = pickWord(words);
  const display = document.getElementById("word");
  display.innerHTML = chooseWord;
};
