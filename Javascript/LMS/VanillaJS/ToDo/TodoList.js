function TodoList({ $target, initialState }) {
  const $todoList = document.createElement("div"); //div필드를 생성하는 todolist

  $target.appendChild($todoList); //target에 todolist를 추가한다

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $todoList.innerHTML = `
   <ul>
   ${this.state.map(({ text }) => `<li>${text}</li>`).join("")}
   </ul>`; //state가 올바른가?
  };

  this.render();
}
