const s = "abcdedf";
const b = "qwer";

function solution(s) {
  const n = s.length;
  if (n % 2 == 0) {
    return s[n / 2 - 1] + s[n / 2];
  } else {
    console.log(s[(n - 1) / 2]);
    return;
  }
}

solution(s);
