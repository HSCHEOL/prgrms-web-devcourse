const fruits = [
  {
    name: "apple",
    number: 2,
    price: 1000,
  },
  {
    name: "banana",
    number: 3,
    price: 2500,
  },
  {
    name: "orange",
    number: 5,
    price: 5000,
  },
];

function findFruit(FruitsName) {
  Findfruits = fruits.find((fruits) => fruits.name === FruitsName);
  if (Findfruits) {
    console.log(
      `과일: ${Findfruits.name}
    수량: ${Findfruits.number}
    가격: ${Findfruits.price}`
    );
  } else {
    console.log("과일 없음");
  }
}

findFruit("apple");
