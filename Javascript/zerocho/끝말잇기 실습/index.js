const number = Number(prompt("참여자가 몇명인가요?")); //이 값은 어디에 저장되는가?
const $input = document.querySelector("input"); //유일한 변수 $
const $button = document.querySelector("button");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");

let CurWord;
let word;
const onInput = (e) => {
  CurWord = e.target.value;
};

const onClickButton = () => {
  if (!word) {
    word = CurWord;
    $word.textContent = word;
    $input.value = "";
  } else {
    if (word.at(-1) === CurWord[0]) {
      word = CurWord;
      $word.textContent = word;
      $input.value = "";
    } else {
      alert("단어가 틀렸습니다!");
    }
  }
};

$input.addEventListener("input", onInput);
$button.addEventListener("click", onClickButton);
