setTimeout(function () {
  console.log("첫 번째 작업 완료");
  setTimeout(function () {
    console.log("두 번째 작업 완료");
    setTimeout(function () {
      console.log("세 번째 작업 완료");
    }, 1000);
  }, 1000);
}, 1000);
